import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import '../CompDesignFolder/DisplayItemComp.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import {Container,Row,Col, Button,Toast} from 'react-bootstrap';

const DisplayItemComp = () => {
  const location = useLocation();
  const { token } = location.state||{};
  console.log("DisplayitemComp token: ",token);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const [showConfirmToast, setShowConfirmToast] = useState(false);
  const [CtoastMessage, setCToastMessage] = useState('');
  const [CtoastVariant, setCToastVariant] = useState('');

  const [id,setID]=useState('')
  
  const [data, setData] = useState([])

  const deleteItem =async(delConfirm,id)=>{
    setShowConfirmToast(false)
    if(delConfirm){
      const data = await axios.delete(`http://localhost:8000/api/v1/admin/deleteitem/${id}`,{
        headers:{
          Authorization:`bearer ${token}`,
        }
      });
      if(data.data.status==='Success'){
        setToastVariant('Success');
      }
      else if(data.data.status==='Warn'){
        setToastVariant('Warning');
      }
      else{
        setToastVariant('Danger');
      }
      setToastMessage(data.data.message);
      setShowToast(true);
    
      console.log(data);
    }
    else{
      setShowToast(true);
      setToastMessage(`You don't DELETE ${id} ID Item`);
      setToastVariant('Dark');
    }
  } 

  const display=async()=>{
    try{
      const response=await axios.get('http://localhost:8000/api/v1/item/getitems',{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      console.log(response.data.data);
      if(response.data.data.length>0)
      setData(response.data.data);
    }
    catch(e){
      console.error("Error in fetching data: ", e)
      setData([])
    }
  }
  useEffect(()=>{
    display();
  },[deleteItem])

  return (
    <Container>
    <Row>
      {data && data.map((item)=>{
        return(
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src={item.imgPath} fluid alt='item' className="custom-image" />
              <a href='#'>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="custom-title" >{item.title}</MDBCardTitle>
              <MDBCardText className="custom-text">
              {item.discription}
              </MDBCardText>
              <MDBBtn href='#' className='fw-bold' style={{font:'white', whiteSpace: 'nowrap', textAlign:'center', background:'#2ba8c4', border:'#08c3c9',marginBottom:'13px', paddingLeft:'70px', paddingRight:'50px' }}>ITEM DETAILS</MDBBtn>
              <Button href='#' style={{font:'white', background:'#0077b6', border:'#023e8a', marginRight:'20px', paddingLeft:'25px', paddingRight:'25px'}}>Update</Button>
              <Button onClick={()=>{
                setID(item._id)
                setShowConfirmToast(true);
                setCToastMessage(`Are You Sure, Do you want to DELETE Item - ${item.title} ? `);
                setCToastVariant('Danger');
              }} className='fw-bold' variant='outline-danger' style={{paddingLeft:'25px', paddingRight:'25px'}}>Delete</Button>
            </MDBCardBody>
          </MDBCard>
          </Col>
        )
      })}
    </Row>
    {showToast && (
      <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
      style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
      onClose={() =>setShowToast(false)} show={showToast}>
        <Toast.Header>
        <strong className='me-auto'>Status</strong>
          <small>Lenskart</small>
        </Toast.Header>
        <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
        <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
        <div className="d-grid">
        <Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button>
        </div>
      </Toast>
    )}
    {showConfirmToast && (
      <Toast className='d-inline-block m-1' bg={CtoastVariant.toLowerCase()}
      style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
      onClose={() =>{ deleteItem(false,id);setShowConfirmToast(false)}} show={showConfirmToast}>
        <Toast.Header>
        <strong className='me-auto'>Status</strong>
          <small>Lenskart</small>
        </Toast.Header>
        <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
        <font color="white" size='3'>{CtoastMessage}</font><br/></Toast.Body>
        <div className="d-grid">
        <Button variant='light' onClick={()=>{deleteItem(true,id);setShowConfirmToast(false)}} style={{borderRadius:'14px',margin:'5px'}}>OK</Button>
        </div>
      </Toast>
    )}
    </Container>
  )
}

export default DisplayItemComp
