import Router, { useRouter } from 'next/router'
import { useState } from "react";
import { Button, Modal, Alert } from 'react-bootstrap';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() { 
    const router = useRouter()
    const [Sucessshow, setSucessShow] = useState()
    const SuccessHandleClose = () => setSucessShow(false)
    const SuccessHandleShow = () => setSucessShow(true)
    const [UnSucessshow, setUnSucessShow] = useState(false)
    const UnSuccessHandleClose = () => setUnSucessShow(false)
    const UnSuccessHandleShow = () => setUnSucessShow(true)
    const { data, error } = useSWR("/api/verify", fetcher);

    const Laundry1Send = preventDefault(async () => {
        const res = await fetch('/api/Laundry', {
          method: 'POST'
        })
        .then((res) => res.json())
        if(res.success){
          window.location.reload()
	return
        } else {
          window.location.reload()
          return
        }
    })

    const Laundry2Send = preventDefault(async () => {
      const res = await fetch('/api/Laundry2', {
        method: 'POST',
      })
      .then((res) => res.json())
      if (res.success) {
	  window.location.reload()
          return
        }else {
          window.location.reload()
          return
        }
      })

  const Laundry3Send = preventDefault(async () => {
    const res = await fetch('/api/Laundry3', {
      method: 'POST',
    })
    .then((res) => res.json())
      if (res.success) {
          window.location.reload()
        return
      }else {
          window.location.reload()
        return
      }
      
    })
    const Laundry4Send = preventDefault(async () => {
        const res = await fetch('/api/Laundry4', {
          method: 'POST',
        })
        .then((res) => res.json())
      if (res.success) {
          window.location.reload()
        return
      }else {
          window.location.reload()
        return
      }
    })

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
                <form onSubmit={Laundry1Send} method="POST">
                  <Button style={{width: '250px', height: '60px', marginTop: '30px'}} variant={data.Laundry1?(data.L1use ? "success" : "danger"):"primary"} type="submit">1호 세탁기<br/>{data.Laundry1?data.Laundry1Room+`호 ${data.Laundry1name}님 사용중`:"사용 가능"}</Button><br/>
                </form>
                <form style={{marginTop: '24px'}} onSubmit={Laundry2Send}>
                <Button style={{width: '250px', height: '60px'}} variant={data.Laundry2?(data.L2use ? "success" : "danger"):"primary"} type="submit">2호 세탁기<br/>{data.Laundry2?data.Laundry2Room+`호 ${data.Laundry2name}님 사용중`:"사용 가능"}</Button><br/>
                </form>
                <form style={{marginTop: '24px'}} onSubmit={Laundry3Send}>
                <Button style={{width: '250px', height: '60px'}} variant={data.Laundry3?(data.L3use ? "success" : "danger"):"primary"} type="submit">3호 세탁기<br/>{data.Laundry3?data.Laundry3Room+`호 ${data.Laundry3name}님 사용중`:"사용 가능"}</Button><br/>
                </form>
                <form style={{marginTop: '24px'}} onSubmit={Laundry4Send}>
                <Button style={{width: '250px', height: '60px', marginBottom: '30px'}} variant={data.Laundry4?(data.L4use ? "success" : "danger"):"primary"} type="submit">건조기<br/>{data.Laundry4?data.Laundry4Room+`호 ${data.Laundry4name}님 사용중`:"사용 가능"}</Button><br/>
                </form>
              </div>
            </div>

            <Modal show={Sucessshow} onHide={SuccessHandleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>성공</Modal.Title>
              </Modal.Header>
            <Modal.Body>
              <Alert variant="success">
                요청 확인 완료
              </Alert>
            </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={SuccessHandleClose} style={{width: '200px'}} >다음 화면으로</Button>
              </Modal.Footer>
            </Modal>

              <Modal show={UnSucessshow} onHide={UnSuccessHandleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>실패</Modal.Title>
                </Modal.Header>
              <Modal.Body>
                <Alert variant="danger">
                    요청 확인 실패
                </Alert>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={UnSuccessHandleClose} style={{width: '200px'}} >다음 화면으로</Button>
              </Modal.Footer>
            </Modal>
          </body>
        )
    }
}
