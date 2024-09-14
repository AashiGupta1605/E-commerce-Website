import React, {useState} from 'react'
import axios from 'axios';
// import LoginFromReg from './LoginFromReg'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import img from './Images/a328ca3671497960ccf46a964e74aca5-removebg-preview.png'
import './CompDesignFolder/RegModal.css'
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
}
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const RegModal = ({show,handleClose}) => {
  const [UserFirstName, setUserFirstName]=useState('');
  const [UserLastName, setUserLastName]=useState('');
  const [UserEID, setUserEID]=useState('');
  const [UserPassword, setUserPassword]=useState('');
  const [UserRePassword, setUserRePassword]=useState('');
  const [UserMobileNo, setUserMobileNo]=useState('');
  const [UserGender, setUserGender]=useState('');
  const [UserDob, setUserDob]=useState('');
  const [UserState, setUserState]=useState('');
  const [UserCity, setUserCity]=useState('');
  const [UserAddress, setUserAddress]=useState('');
  const [UserPincode, setUserPincode]=useState('');

  const RegData = {UserFirstName,UserLastName,UserDob,UserGender,UserEID,UserMobileNo,UserPassword,UserRePassword,UserAddress,UserPincode,UserCity,UserState}
  const register = async()=>{
    const data = await axios.post("http://localhost:8000/api/v1/user/register",RegData);
    alert(data.data.message);
    reset();
    console.log(data);
  }

  const reset=()=>{
    setUserFirstName('')
    setUserLastName('')
    setUserGender('')
    setUserDob('')
    setUserEID('')
    setUserMobileNo('')
    setUserAddress('')
    setUserState('')
    setUserCity('')
    setUserPassword('')
    setUserRePassword('')
    setUserPincode('')
  }
  return (
    <>
    <Modal show={show} onHide={handleClose}>
      
      <Modal.Header closeButton style={{background:'#cccccc', paddingBlockStart:'6px', paddingBlockEnd:'4px'}}>
        <Modal.Title>
          <center>
          <img  src={img} width="120px" height="80px" alt="Lenskart.png" style={{marginBlockEnd:'-10%', marginBlockStart:'-5%'}}/>
          </center>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className='bg-dark'>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
      <MDBCard className='my-4'>
      <MDBRow className='g-0'>
          <MDBCardBody className='text-black d-flex flex-column justify-content-center'>
            <center><h3 className="mb-5 text-uppercase fw-bold">User Registration Form</h3></center>
            <MDBRow>
              <MDBCol>
              <div className="input-wrapper">
              <label htmlFor="firstName" className="input-label">
              First Name <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='First Name' size='lg' type='text' id='firstName' value={UserFirstName} onChange={(e)=>setUserFirstName(e.target.value)}/>
              </div>
              </MDBCol>

              <MDBCol>
              <div className="input-wrapper">
              <label htmlFor="LastName" className="input-label">
              Last Name <span className="required-asterisk">*</span>
              </label>
                <MDBInput wrapperClass='mb-4' placeholder='Last Name' size='lg' type='text' id='LastName' value={UserLastName} onChange={(e)=>setUserLastName(e.target.value)}/>
              </div>
              </MDBCol>
            </MDBRow>
            <div className="input-wrapper">
              <label htmlFor="dob" className="input-label">
              Date of Birth <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='Date of Birth' size='lg' type='date' id='dob' value={UserDob} onChange={(e)=>setUserDob(e.target.value)}/>
            </div>
              <div className='d-md-flex ustify-content-start align-items-center mb-4'>
              <h7 class="fw-bold mb-0 me-4"><span className="required-asterisk">*</span>&nbsp;Gender: </h7>
              <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline onChange={(e)=>setUserGender(e.target.value)} />
              <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline onChange={(e)=>setUserGender(e.target.value)}/>
              <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline onChange={(e)=>setUserGender(e.target.value)}/>
              </div>
              <div className="input-wrapper">
              <label htmlFor="eid" className="input-label">
              Email ID <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='abc@mail.com' size='lg' type='email' id='eid' value={UserEID} onChange={(e)=>setUserEID(e.target.value)}/>
              </div>
              <div className="input-wrapper">
              <label htmlFor="mob" className="input-label">
              Conact Number <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='Phone Number' size='lg' type='tel' id='mob' value={UserMobileNo} onChange={(e)=>setUserMobileNo(e.target.value)}/>
              </div>
              <div className="input-wrapper">
              <label htmlFor="pass" className="input-label">
              Password <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' type='password'id='pass' value={UserPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
              </div>
              <div className="input-wrapper">
              <label htmlFor="repass" className="input-label">
              Re-Password <span className="required-asterisk">*</span>
              </label>
              <MDBInput wrapperClass='mb-4' placeholder='Re-Password' size='lg' type='password' id='repass' value={UserRePassword} onChange={(e)=>setUserRePassword(e.target.value)}/><br/>
              </div>

              <div className='d-md-flex ustify-content-start align-items-center mb-4 fw-bold mb-0 me-4'><font size='5'>-Your Address-</font></div>
              <MDBInput wrapperClass='mb-4' placeholder='Your Current Address' size='lg' type='text' value={UserAddress} onChange={(e)=>setUserAddress(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' placeholder='PIN-Code' size='lg' type='number' value={UserPincode} onChange={(e)=>setUserPincode(e.target.value)}/>
              <MDBRow>
              <MDBCol style={{paddingRight:'3px',paddingLeft:'0px'}}><span className="required-asterisk">*</span></MDBCol>
              <MDBCol className='mb-4' size='lg' style={{paddingRight:'75px',paddingLeft:'0px'}}>
              <select name="State" id="stateID" style={{height:'40px', width:'170px', borderRadius:'10px'}} value={UserState} onChange={(e)=>setUserState(e.target.value)}>
              <option value="State">State</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Delhi">Delhi</option>
              <option value="Chattishgar">Chattishgar</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Maharashtra">Maharashtra</option>
              </select>
              </MDBCol>
              <MDBCol><span className="required-asterisk">*</span></MDBCol>
              <MDBCol className='mb-4' size='lg' style={{paddingRight:'0px',paddingLeft:'0px'}}>
              <select name="City" id="cityID" style={{height:'40px', width:'170px', borderRadius:'10px'}} value={UserCity} onChange={(e)=>setUserCity(e.target.value)}>
              <option value="State" className="required-asterisk">City</option>
              <option value="Madhya Pradesh">Gwalior</option>
              <option value="Uttar Pradesh">Indore</option>
              <option value="Delhi">Bhopal</option>
              <option value="Chattishgar">Raipur</option>
              <option value="Rajasthan">Jaipur</option>
              </select>
              </MDBCol>
              </MDBRow>
          </MDBCardBody>
      </MDBRow>
    </MDBCard>
    </MDBRow>
    </Modal.Body>

      <Modal.Footer style={{background:'#333333'}}>
      <div className="d-flex justify-content-end pt-3">
        <Button variant='light' onClick={()=>reset()} >Reset</Button>
        {/* <Button>Login</Button> */}
        {/* <link href='/'>Login</link> Error */}
        <Link to="/login">
          <Button variant='secondary' style={{ marginLeft: '10px'}}>Login</Button>
        </Link>
        <Button variant='primary'onClick={()=>register()} style={{ marginLeft: '10px' }}>Register</Button>      
        </div>
      </Modal.Footer>

    </Modal>
    </>
  )
}

export default RegModal