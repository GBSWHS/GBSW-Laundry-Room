import knex from 'knex'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

const DBConfig = {
    host:'host', // mysql이 돌아가는 서버 아이피
    port: 3306,
    user: 'user', 
    database : 'database'
}
const db = knex({
    client: 'mysql',
    connection: DBConfig
})


export default async function HGK_API (req, res) {
    const { token } = req.cookies
        const checktoken = jwt.verify(token, process.env.SECRETHASH)
        const Laundry = await (await db.select('*').from('Laundrys')).sort((a, b) => { return a.num - b.num })
        let L1use = 0
        let L2use = 0
        let L3use = 0
        let L4use = 0
        let L5use = 0
        let L6use = 0
        let L7use = 0
        let L8use = 0
        let L9use = 0
        let L10use = 0
        let L11use = 0
        let L12use = 0
        if (checktoken){
            if (Laundry[0].realname == checktoken.realname && Laundry[0].room == checktoken.room) L1use = 1
            else L1use = 0
            if (Laundry[1].realname == checktoken.realname && Laundry[1].room == checktoken.room) L2use = 1
            else L2use = 0
            if (Laundry[2].realname == checktoken.realname && Laundry[2].room == checktoken.room) L3use = 1
            else L3use = 0
            if (Laundry[3].realname == checktoken.realname && Laundry[3].room == checktoken.room) L4use = 1
            else L4use = 0
            if (Laundry[4].realname == checktoken.realname && Laundry[4].room == checktoken.room) L5use = 1
            else L5use = 0
            if (Laundry[5].realname == checktoken.realname && Laundry[5].room == checktoken.room) L6use = 1
            else L6use = 0
            if (Laundry[6].realname == checktoken.realname && Laundry[6].room == checktoken.room) L7use = 1
            else L7use = 0
            if (Laundry[7].realname == checktoken.realname && Laundry[7].room == checktoken.room) L8use = 1
            else L8use = 0
            if (Laundry[8].realname == checktoken.realname && Laundry[8].room == checktoken.room) L9use = 1
            else L9use = 0
            if (Laundry[9].realname == checktoken.realname && Laundry[9].room == checktoken.room) L10use = 1
            else L10use = 0
            if (Laundry[10].realname == checktoken.realname && Laundry[10].room == checktoken.room) L11use = 1
            else L11use = 0
            if (Laundry[11].realname == checktoken.realname && Laundry[11].room == checktoken.room) L12use = 1
            else L12use = 0
            return res.send({ success: true,
                username: checktoken.username,
                realname: checktoken.realname,
                floor: checktoken.room,
                Laundry1: Laundry[0].use,
                Laundry2: Laundry[1].use,
                Laundry3: Laundry[2].use,
                Laundry4: Laundry[3].use,
                Laundry5: Laundry[4].use,
                Laundry6: Laundry[5].use,
                Laundry7: Laundry[6].use,
                Laundry8: Laundry[7].use,
                Laundry9: Laundry[8].use,
                Laundry10: Laundry[9].use,
                Laundry11: Laundry[10].use,
                Laundry12: Laundry[11].use,
                Laundry1Room: Laundry[0].room,
                Laundry2Room: Laundry[1].room,
                Laundry3Room: Laundry[2].room,
                Laundry4Room: Laundry[3].room,
                Laundry5Room: Laundry[4].room,
                Laundry6Room: Laundry[5].room,
                Laundry7Room: Laundry[6].room,
                Laundry8Room: Laundry[7].room,
                Laundry9Room: Laundry[8].room,
                Laundry10Room: Laundry[9].room,
                Laundry11Room: Laundry[10].room,
                Laundry12Room: Laundry[11].room,
                Laundry1name: Laundry[0].realname,
                Laundry2name: Laundry[1].realname,
                Laundry3name: Laundry[2].realname,
                Laundry4name: Laundry[3].realname,
                Laundry5name: Laundry[4].realname,
                Laundry6name: Laundry[5].realname,
                Laundry7name: Laundry[6].realname,
                Laundry8name: Laundry[7].realname,
                Laundry9name: Laundry[8].realname,
                Laundry10name: Laundry[9].realname,
                Laundry11name: Laundry[10].realname,
                Laundry12name: Laundry[11].realname,
                L1use,
                L2use,
                L3use,
                L4use,
                L5use,
                L6use,
                L7use,
                L8use,
                L9use,
                L10use,
                L11use,
                L12use,
            })
        } else return res.send({success: false})
}