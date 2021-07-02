import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'

export default function Home() { 
    const router = useRouter()
    const { data, error } = useSWR("/api/verify", fetcher)

    async function Laundry (id) {
      const res = await fetch('/api/Laundry', {
        method: 'POST',
        body: JSON.stringify({ 'laundryid': id }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then((res) => res.json())
      if(res.success){
        window.location.reload()
        return
      } else {
        window.location.reload()
        return
      }
    }

    if (error){
        <body>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 에러 ... </h1>
        <form style={{textAlign: 'center'}} action='/' method='GET'>
        <Button type="submit" variant="primary">로그인 화면으로</Button>
        </form>
      </body>
    }
    if (!data){
        return(
            <body>
                <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로딩중 ... </h1>
            </body>
        ) 
    } else {
      if (data.floor >= 201 && data.floor <= 209 ){
        return (
          <body>
            <div style={{height: '100%'}}>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>경소고 2층</title>
              </head>
              <header>
                <div style={{textAlign: 'center'}}>
                  <h1 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>Welcome {data.realname}</h1>
                  <h2 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>경소고 2층 세탁실</h2>
                </div>
              </header>
              <div style={{textAlign: 'center', background: '#999999', height: '100%'}}>
                <Button onClick={e=>Laundry(5)} style={{width: '250px', height: '60px', marginTop: '30px'}} variant={data.Laundry5?(data.L5use ? "success" : "danger"):"primary"} type="submit">1호 세탁기<br/>{data.Laundry5?data.Laundry5Room+`호 ${data.Laundry5name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(6)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry6?(data.L6use ? "success" : "danger"):"primary"} type="submit">2호 세탁기<br/>{data.Laundry6?data.Laundry6Room+`호 ${data.Laundry6name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(7)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry7?(data.L7use ? "success" : "danger"):"primary"} type="submit">3호 세탁기<br/>{data.Laundry7?data.Laundry7Room+`호 ${data.Laundry7name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(8)} style={{width: '250px', height: '60px', marginTop: '24px', marginBottom: '30px'}} variant={data.Laundry8?(data.L8use ? "success" : "danger"):"primary"} type="submit">건조기<br/>{data.Laundry8?data.Laundry8Room+`호 ${data.Laundry8name}님 사용중`:"사용 가능"}</Button><br/>
              </div>
            </div>
          </body>
        )
      }

      if (data.floor >= 301 && data.floor <= 309 ){
        return (
          <body>
            <div style={{height: '100%'}}>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>경소고 3층</title>
              </head>
              <header>
                <div style={{textAlign: 'center'}}>
                  <h1 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>Welcome {data.realname}</h1>
                  <h2 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>경소고 3층 세탁실</h2>
                </div>
              </header>
              <div style={{textAlign: 'center', background: '#999999', height: '100%'}}>
                <Button onClick={e=>Laundry(1)} style={{width: '250px', height: '60px', marginTop: '30px'}} variant={data.Laundry1?(data.L1use ? "success" : "danger"):"primary"} type="submit">1호 세탁기<br/>{data.Laundry1?data.Laundry1Room+`호 ${data.Laundry1name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(2)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry2?(data.L2use ? "success" : "danger"):"primary"} type="submit">2호 세탁기<br/>{data.Laundry2?data.Laundry2Room+`호 ${data.Laundry2name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(3)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry3?(data.L3use ? "success" : "danger"):"primary"} type="submit">3호 세탁기<br/>{data.Laundry3?data.Laundry3Room+`호 ${data.Laundry3name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(4)} style={{width: '250px', height: '60px', marginTop: '24px',  marginBottom: '30px'}} variant={data.Laundry4?(data.L4use ? "success" : "danger"):"primary"} type="submit">건조기<br/>{data.Laundry4?data.Laundry4Room+`호 ${data.Laundry4name}님 사용중`:"사용 가능"}</Button><br/>
              </div>
            </div>
          </body>
        )
      }

      if (data.floor >= 401 && data.floor <= 409 ){
        return (
          <body>
            <div style={{height: '100%'}}>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>경소고 4층</title>
              </head>
              <header>
                <div style={{textAlign: 'center'}}>
                  <h1 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>Welcome {data.realname}</h1>
                  <h2 style={{fontSize: '30px', marginTop: '30px', fontWeight: '600'}}>경소고 4층 세탁실</h2>
                </div>
              </header>
              <div style={{textAlign: 'center', background: '#999999', height: '100%'}}>
                <Button onClick={e=>Laundry(9)} style={{width: '250px', height: '60px', marginTop: '30px'}} variant={data.Laundry9?(data.L9use ? "success" : "danger"):"primary"} type="submit">1호 세탁기<br/>{data.Laundry9?data.Laundry9Room+`호 ${data.Laundry9name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(10)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry10?(data.L10use ? "success" : "danger"):"primary"} type="submit">2호 세탁기<br/>{data.Laundry10?data.Laundry10Room+`호 ${data.Laundry10name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(11)} style={{width: '250px', height: '60px', marginTop: '24px'}} variant={data.Laundry11?(data.L11use ? "success" : "danger"):"primary"} type="submit">3호 세탁기<br/>{data.Laundry11?data.Laundry11Room+`호 ${data.Laundry11name}님 사용중`:"사용 가능"}</Button><br/>
                <Button onClick={e=>Laundry(12)} style={{width: '250px', height: '60px', marginTop: '24px', marginBottom: '30px'}} variant={data.Laundry12?(data.L12use ? "success" : "danger"):"primary"} type="submit">건조기<br/>{data.Laundry12?data.Laundry12Room+`호 ${data.Laundry12name}님 사용중`:"사용 가능"}</Button><br/>
              </div>
            </div>
          </body>
        )
      }
    }
}
