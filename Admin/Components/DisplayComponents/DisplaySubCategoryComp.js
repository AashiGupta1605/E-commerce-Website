import React, {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import {Card, Table, Button,Toast} from 'react-bootstrap';
import UpdateSubCategoryComp from '../UpdateComponents/UpdateRootCategoryComp';

const DisplaySubCategoryComp = () => {
  const location = useLocation();
  const { token } = location.state||{};
  console.log("DisplaySubCategoryComp token: ",token); 

  const [currentCategory,setCurrentCategory]=useState({});

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const [showConfirmToast, setShowConfirmToast] = useState(false);
  const [CtoastMessage, setCToastMessage] = useState('');
  const [CtoastVariant, setCToastVariant] = useState('');

  const deleteCategory =async(delConfirm,id)=>{
    setShowConfirmToast(false)
    if(delConfirm){
      const data = await axios.delete(`http://localhost:8000/api/v1/admin/deletesubcategory/${id}`,{
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
      setToastMessage(`You don't DELETE ${currentCategory.CategoryName} Category`);
      setToastVariant('Dark');
    } 
  } 
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/item/getstylecategories',{
      headers:{
        Authorization:`bearer ${token}`,
      }
    }).then((res) => {
          console.log(res)
          setData(res.data.data);
        });
  }, [deleteCategory]);

  return (
    <div className="border-3 border-info border" style={{marginLeft:'40px',marginRight:'40px'}}>
      <Card className="shadow">
        <Card.Body>
          <div className="mb-3 mt-4">
          <center>
            <h3 className="fw-bold text-uppercase mb-2"><font color="#023E8A">***  Available Style Categories  ***</font></h3>
            <p className="mb-5">------------------------------------------------------------------------------------------------------------------------------------</p>
            <Table striped bordered hover style={{width:'80%'}}>
            <thead>
              <tr>
              <th>Category ID</th>
              <th>Categories</th>
              <th>Discription</th>
              </tr>
            </thead>
            <tbody>
            {data && data.map((category) =>{
            return(
            <>
            <tr>
            <td>{category._id}</td>
            <td>{category.CategoryName}</td>
            <td>{category.CategoryDisc}</td>
            <td>
            <Button variant="primary" onClick={()=>{handleShow();setCurrentCategory(category)}}>Update</Button>&nbsp;&nbsp;
            <Button variant="danger" onClick={()=>{
              setCurrentCategory(category);
              setShowConfirmToast(true);
              setCToastMessage(`Are You Sure, Do you want to DELETE ${category.CategoryName} Category ? `);
              setCToastVariant('Danger');
            }}>Delete</Button>&nbsp;&nbsp;
            </td>
            </tr>
            <UpdateSubCategoryComp show={show} handleClose={handleClose} token={token} currentData={category}/>
            </>
            );
            })}
            </tbody>
            </Table>
          </center>
          </div>
        </Card.Body>
      </Card>
      {showToast && (
      <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
      style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
      onClose={() => setShowToast(false)} show={showToast}>
        <Toast.Header>
        <strong className='me-auto'>Status</strong>
          <small>Lenskart</small>
        </Toast.Header>
        <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
        <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
        <div className="d-grid"><Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button></div>
      </Toast>
    )}
    {showConfirmToast && (
      <Toast className='d-inline-block m-1' bg={CtoastVariant.toLowerCase()}
      style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
      onClose={() =>{ deleteCategory(false,currentCategory._id);setShowConfirmToast(false)}} show={showConfirmToast}>
        <Toast.Header>
        <strong className='me-auto'>Status</strong>
          <small>Lenskart</small>
        </Toast.Header>
        <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
        <font color="white" size='3'>{CtoastMessage}</font><br/></Toast.Body>
        <div className="d-grid">
        <Button variant='light' onClick={()=>{deleteCategory(true,currentCategory._id);setShowConfirmToast(false)}} style={{borderRadius:'14px',margin:'5px'}}>OK</Button>
        </div>
      </Toast>
    )}
    </div>
  )
}

export default DisplaySubCategoryComp
