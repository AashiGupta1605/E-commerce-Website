import React,{useState} from 'react'
import axios from 'axios';
import {Button, Modal} from 'react-bootstrap';
import RegModal from './RegModal';
import img from './Images/a328ca3671497960ccf46a964e74aca5-removebg-preview.png'
import './CompDesignFolder/LoginModal.css'
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput
  }
  from 'mdb-react-ui-kit';

const LoginModal = ({ show, handleClose }) => {
  const [Lshow, setLShow] = useState(false);
  const LhandleClose = () => setLShow(false);
  const LhandleShow = () => setLShow(true);

  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const loginData={UserEID:email,UserPassword:password}

  const login=async()=>{
    const data = await axios.post("http://localhost:8000/api/v1/user/login",loginData);
    alert(data.data.message)
    setEmail('')
    setPassword('')
    console.log(data);
  } 

  return (
    <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton style={{background:'#444'}}></Modal.Header>
    <Modal.Title style={{background:'#4444', paddingBlockEnd:'0%'}}>
    <center>
        <img  src={img} width="200px" height="100px" alt="Lenskart.png" style={{marginBlockEnd:'-10%'}}/>
    </center>
    </Modal.Title>
    <Modal.Body style={{background:'#4444', paddingBlockStart:'-40%'}}>
    <MDBContainer fluid>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    <MDBCol col='12'>
    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
    <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    <p className="text-white-50 mb-5">Please enter your Email ID and password!</p>
    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email' size="lg"/>
    <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password' size="lg"/>
    <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
    <Button variant='primary' onClick={login}>Login</Button>

        {/* <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div> */}
        <br/><br/>
    <div>
        <p className="mb-0">Don't have an account? <Button variant="secondary" onClick={()=>{handleClose();LhandleShow()}}>Register</Button></p>
    </div>
    </MDBCardBody>
    </MDBCard>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </Modal.Body>
    </Modal>
    <RegModal show={Lshow} handleClose={LhandleClose}/>
    </>
  )
}

export default LoginModal