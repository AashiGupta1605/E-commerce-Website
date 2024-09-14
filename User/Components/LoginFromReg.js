import React,{useState} from 'react'
import LoginModal from './LoginModal'

const LoginFromReg = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <LoginModal show={show} handleClose={handleClose}/>
    </div>
  )
}

export default LoginFromReg
