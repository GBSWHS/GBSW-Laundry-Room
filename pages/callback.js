import Link from 'next/link'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router'
import useSWR from 'swr'
import fetcher from '../utils/fetcher';

export default function Callback () {
  const router = useRouter()
  const url = new URL(router.asPath, '<url>')
  const code = url.searchParams.get('code')

  const { data, error } = useSWR('/api/login?code=' + code, fetcher);
  if (error){
    return(
        <body>
          <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 에러 ... </h1>
          <p>{data?.message}</p>
          <Link href="/"><Button style={{width: '250px', height: '60px', position: 'absolute', left: '50%', transform: 'translateX(-50%)'}} type="submit" variant="primary">로그인 화면으로</Button></Link>
        </body>
    )  
    }
    if(!data || !data?.success){
        return(
            <body>
              <h1 style={{textAlign: 'center', marginTop: '30px', fontWeight: '600'}}> 로딩중 ... </h1>
            </body>
        ) 
    }
  if (data.success) { 
    document.cookie = 'token=' + data.token
    window.location.replace('/Laundry')
  }

  return <h1 style={{ marginTop:'30px', textAlign: 'center', fontWeight: '600'}}>이동중... <br/> (이 메시지가 너무 오래 보인다면 인터넷 연결 상태를 확인하세요)</h1>
}

// 
