// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import {Button,Toast} from 'react-bootstrap';

// const DeleteRootCategoryComp = ({deleteCall,handleDeleteNotCall, token,category}) => {
// const [showToast, setShowToast] = useState(false);
// const [toastMessage, setToastMessage] = useState('');
// const [toastVariant, setToastVariant] = useState('');

// const deleteCategory =async()=>{
//   console.log("in del fun: ")
//   const data = await axios.delete(`http://localhost:8000/api/v1/admin/deleterootcategory/${category}`,{
//     headers:{
//       Authorization:`bearer ${token}`,
//     }
//   });
//   handleDeleteNotCall()
//   if(data.data.status==='Success'){
//     setToastVariant('Success');
//   }
//   else if(data.data.status==='Warn'){
//     setToastVariant('Warning');
//   }
//   else{
//     setToastVariant('Danger');
//   }
//   setToastMessage(data.data.message);
//   setShowToast(true);

//   console.log(data);
// } 
// // useEffect(()=>{
// //   if(deleteCall)
// //   deleteCategory()
// // },[deleteCall,handleDeleteNotCall])

// return (
//   <div>
//   {console.log("in del comp:",deleteCall)}
//   {deleteCall && deleteCategory()}
//   {showToast && (
//       <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
//       style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} 
//       onClose={() => setShowToast(false)} show={showToast}>
//         <Toast.Header>
//           <strong className='me-auto'>Add Item Status</strong>
//           <small>Lenskart</small>
//         </Toast.Header>
//         <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
//         <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
//         <div className="d-grid"><Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button></div>
//       </Toast>
//     )}
//   </div>
// ) 
// }

// export default DeleteRootCategoryComp
