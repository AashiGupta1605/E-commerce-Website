import React,{useState} from 'react'
import axios from 'axios';
import {Button, Modal,Toast,Form} from 'react-bootstrap';
import {
    MDBContainer,
    MDBRow,
    MDBCol
  }
  from 'mdb-react-ui-kit';

const UpdateRootCategoryComp = ({show,handleClose,token,currentCategory}) => {
  console.log("Data reached to update root : ",currentCategory)
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const id=currentCategory._id;
  const [UCategoryName,setUCategoryName]=useState(currentCategory.CategoryName);
  const [CategoryDisc,setCategoryDisc]=useState(currentCategory.CategoryDisc);

  useState(()=>{
    if(currentCategory){
      setCategoryDisc(currentCategory.CategoryDisc)
      setUCategoryName(currentCategory.CategoryName)
    }
  },[currentCategory])     // console.log("UCategoryName : ",UCategoryName)
                          // console.log("Category Discription : ",CategoryDisc)
  const CategoryName=UCategoryName
  // .toUpperCase()
  const NewCategoryData={CategoryName,CategoryDisc};

  const update=async()=>{
    const response = await axios.put(`http://localhost:8000/api/v1/admin/updaterootcategory/${id}`,NewCategoryData,{
      headers:{
        Authorization:`bearer ${token}`,
      }
    });
    if(response.data.status==='Success'){
      setToastVariant('Success');
    }
    else if(response.data.status==='Warn'){
      setToastVariant('Warning');
    }
    else{
      setToastVariant('Danger');
    }
    setToastMessage(response.data.message);
    setShowToast(true);

    setCategoryDisc('');
    setUCategoryName('');
    console.log(response);
  } 
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton style={{background:'#00b4d8'}}></Modal.Header>
    <Modal.Body style={{background:'#caf0f8', paddingBlockStart:'-40%'}}>
    <MDBContainer fluid>
    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
    <MDBCol col='12'>
    <h2 className="fw-bold mb-2 text-uppercase"><font color='#0077b6'>Update Category</font></h2>
    <p className="text-white-50 mb-5"><font color='#0096c7'>Please Enter New Information of Category</font></p>
    <Form className="mb-3">
      <Form.Group className="mb-3">
        <Form.Label className="text-center fw-bold"><font color='#023e8a'>Category Name</font><span className="required-asterisk">*</span></Form.Label>
        <Form.Control type="text" placeholder="Enter Category" onChange={(e)=>setUCategoryName(e.target.value)} value={UCategoryName}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="text-center fw-bold"><font color='#023e8a'>About Category</font></Form.Label>
        <Form.Control type="text" placeholder="Write Category Discription" onChange={(e)=>setCategoryDisc(e.target.value)} value={CategoryDisc}/>
      </Form.Group>
    </Form>
    <center>
    <p className="small mb-3 pb-lg-2"><a class="text-dark-50" href="#!"><font color='#0096c7'>Forgot Category Name?</font></a></p>
    <Button variant='info' className='text-white fw-bold' style={{background:'#023e8a', width:'70%',font:'white'}} onClick={update}>Update Category</Button>
    </center>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </Modal.Body>
    </Modal>
    {showToast && (
        <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
        style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
        onClose={() => setShowToast(false)} show={showToast}>
          <Toast.Header>
            <strong className='me-auto'>Update Status</strong>
            <small>Lenskart</small>
          </Toast.Header>
          <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
          <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
          <div className="d-grid"><Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button></div>
        </Toast>
      )}
    </div> 
  )
}

export default UpdateRootCategoryComp
