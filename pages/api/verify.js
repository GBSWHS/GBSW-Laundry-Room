import knex from 'knex'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config();

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

export default async function HGK_API (req, res) {
    const { token } = req.cookies
        const checktoken = jwt.verify(token, process.env.SECRETHASH), [Laundry1] = await db.select('*').from('Laundrys').where('num', 1), [Laundry2] = await db.select('*').from('Laundrys').where('num', 2), [Laundry3] = await db.select('*').from('Laundrys').where('num', 3), [Laundry4] = await db.select('*').from('Laundrys').where('num', 4), [TABLENAME] = await db.raw(`SELECT * from UserHelp;`)
        let L1use = 0, L2use = 0, L3use = 0, L4use = 0
        if (checktoken){
            if (checktoken.admin){
                if (Laundry1.realname == checktoken.realname && Laundry1.room == checktoken.room) L1use = 1
                else L1use = 0
                if (Laundry2.realname == checktoken.realname && Laundry2.room == checktoken.room) L2use = 1
                else L2use = 0
                if (Laundry3.realname == checktoken.realname && Laundry3.room == checktoken.room) L3use = 1
                else L3use = 0
                if (Laundry4.realname == checktoken.realname && Laundry4.room == checktoken.room) L4use = 1
                else L4use = 0
                return res.send({ success:true, admin: 1, username: checktoken.name, realname: checktoken.realname, Laundry1: Laundry1.use, Laundry2: Laundry2.use, Laundry3: Laundry3.use, Laundry4: Laundry4.use, Laundry1Room: Laundry1.room, Laundry2Room: Laundry2.room, Laundry3Room: Laundry3.room, Laundry4Room: Laundry4.room, Laundry1name: Laundry1.realname, Laundry2name: Laundry2.realname, Laundry3name: Laundry3.realname, Laundry4name: Laundry4.realname, L1use, L2use, L3use, L4use, table: TABLENAME })
            }
            if (Laundry1.realname == checktoken.realname && Laundry1.room == checktoken.room) L1use = 1
            else L1use = 0
            if (Laundry2.realname == checktoken.realname && Laundry2.room == checktoken.room) L2use = 1
            else L2use = 0
            if (Laundry3.realname == checktoken.realname && Laundry3.room == checktoken.room) L3use = 1
            else L3use = 0
            if (Laundry4.realname == checktoken.realname && Laundry4.room == checktoken.room) L4use = 1
            else L4use = 0
            return res.send({ success:true, admin: 0, username: checktoken.username, realname: checktoken.realname, Laundry1: Laundry1.use, Laundry2: Laundry2.use, Laundry3: Laundry3.use, Laundry4: Laundry4.use, Laundry1Room: Laundry1.room, Laundry2Room: Laundry2.room, Laundry3Room: Laundry3.room, Laundry4Room: Laundry4.room, Laundry1name: Laundry1.realname, Laundry2name: Laundry2.realname, Laundry3name: Laundry3.realname, Laundry4name: Laundry4.realname, L1use, L2use, L3use, L4use, table: TABLENAME})
        } else return res.send({success: false, admin: 0})
}