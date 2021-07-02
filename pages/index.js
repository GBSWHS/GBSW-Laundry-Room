import Router, { useRouter } from 'next/router'
import { useState } from "react";
import { Button, Modal, Alert } from 'react-bootstrap';
const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

export default function Home() { 
  const router = useRouter()
  const [usernameText, setusernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  
  const [Sucessshow, setSucessShow] = useState(false);


  const SuccessHandleClose = () => setSucessShow(false);
  const SuccessHandleShow = () => setSucessShow(true);

  const [UnSucessshow, setUnSucessShow] = useState(false);
  
  const UnSuccessHandleClose = () => setUnSucessShow(false);
  const UnSuccessHandleShow = () => setUnSucessShow(true);

  const QueryhandleParam = setValue => e => setValue(e.target.value)
  const QueryhandleSubMit = preventDefault(async () => {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          username: usernameText,
          password: passwordText
        })
      })
        .then((res) => res.json())
      if (!res.success) {
        UnSuccessHandleShow()
        return
      }
      if(res.success){
        SuccessHandleShow()
        document.cookie = 'token' + '=' + ''
        document.cookie = 'token' + '=' + res.token
      }
  })

  const LoginPage = preventDefault(async () => {
    router.push("/user");
  })
    return (
        <div style={{height: '100%', textAlign: 'center', marginTop: '125px'}}>
          <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>경소고 3층</title>
          </head>
              <h1 style={{marginBottom: '100px'}}>접속</h1>
              <a href="https://auth.gbsw.hs.kr/auth?client_id=<클라이언트 아이디>&redirect_uri=<리디렉트 uri>&response_type=code"><Button style={{width: '250px', height: '45px'}} variant="primary" >접속</Button></a>
        </div>
    )
}
