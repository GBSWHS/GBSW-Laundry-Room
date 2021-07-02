import knex from 'knex'
import jwt, { TokenExpiredError } from 'jsonwebtoken'
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
    const code = req.query.code
    const data = await fetch('https://auth.gbsw.hs.kr/api/ident', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code,
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
            grant_type: 'authorization_code'
        })
    }).then((res) => res.json())

    if (!data.success) return res.send({ success: false, message: data.message })
    if (data.user.room_number < 300 || data.user.room_number > 309) return res.send({ success: false, message: "안이 너 3층 아니잖아" })
    return res.send({ success: true, token: jwt.sign({ username: data.user.id, realname: data.user.name, room: data.user.room_number }, process.env.SECRETHASH, { expiresIn: '4h' }) })
}