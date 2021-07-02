import knex from 'knex'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const DBConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'user',
    database : 'database'
}

const db = knex({
    client: 'mysql',
    connection: DBConfig
})

export default async function AuthAPI (req, res) {
    const { token } = req.cookies
    const checktoken = jwt.verify(token, process.env.SECRETHASH)           
    const [Laundry] = await db.select('*').from('Laundrys').where('num', 3)
    if (req.method === 'POST') {
        if (Laundry.realname == checktoken.realname && Laundry.room == checktoken.room && Laundry.use == 1){
            await db('Laundrys').update({ use: 0, room: 0, realname: 0 }).where('num', 3)
            res.send({ success: true })
        }else if (Laundry.realname == 0 && Laundry.room == 0 && Laundry.use == 0){
            await db('Laundrys').update({ use: 1, room: checktoken.room, realname: checktoken.realname }).where('num', 3)
            res.send({ success: true})
        }else return res.send({ success: false });
    }
    return
}