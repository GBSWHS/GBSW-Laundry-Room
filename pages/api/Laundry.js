import knex from 'knex'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const DBConfig = {
    host:'host', // mysql이 돌아가는 서버 아이피
    port: 3306, // 방화벽에서 3306포트를 열어줘야한다
    user: 'username', // CREATE USER cth@'%' // '%'는 any를 뜻한다.
    database : 'database' //HGK_db라는 database 이름
}
const db = knex({
    client: 'mysql',
    connection: DBConfig
})

export default async function AuthAPI (req, res) {
    const { laundryid } = req.body
    const { token } = req.cookies
    const checktoken = jwt.verify(token, process.env.SECRETHASH)
    const StartDate = Date.now() / 1000
    const start = Math.round(StartDate)
    const [Laundry] = await db.select('*').from('Laundrys').where('num', laundryid)
    if (req.method === 'POST') {
        if (Laundry.realname == checktoken.realname && Laundry.room == checktoken.room && Laundry.use == 1){
            await db('Laundrys').update({ use: 0, room: 0, realname: 0, start: 0 }).where('num', laundryid)
            res.send({ success: true })
            return
        }else if (Laundry.realname == 0 && Laundry.room == 0 && Laundry.use == 0){
            await db('Laundrys').update({ use: 1, room: checktoken.room, realname: checktoken.realname, start }).where('num', laundryid)
            res.send({ success: true})
            return
        }else {
            res.send({ success: false})
            return
        }
    }
    res.send({ success: false });
    return 
}
