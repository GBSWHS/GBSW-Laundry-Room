import fetcher from '../utils/fetcher'
import { useRouter } from 'next/router'
import useSWR from 'swr';
import { Button } from 'react-bootstrap';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() {
  const router = useRouter()
  const { data, error } = useSWR("/api/verify", fetcher);
  if (error) {
    console.log(error) 
    return(
      <body>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 에러 ... </h1>
        <form style={{textAlign: 'center'}} action='/' method='GET'>
        <Button type="submit" variant="primary">로그인 화면으로</Button>
        </form>
      </body>
    ) 
  } 
  if (!data) { 
    return(
      <body>
        <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로딩중 ... </h1>
      </body>
    ) 
  } else {
    return(
      <body style={{ textAlign: 'center' }}>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>유저 메인 화면</title>            
          </head>
            <h4 style={{ marginTop: '30px', fontSize: '30px', fontWeight: '600'}}>Welcome {data.realname}</h4>
          <form style={{marginTop: '15px'}} action="Laundry" method="GET">
            <Button style={{width: '225px'}} type="submit" variant="primary">세탁실 이용하기</Button>
          </form>
      </body>
    )
  }
}
