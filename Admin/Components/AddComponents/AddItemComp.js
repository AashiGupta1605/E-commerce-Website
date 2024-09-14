import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { InputGroup, Col, Button, Row, Container, Card, Form,Toast } from 'react-bootstrap'
import '../CompDesignFolder/AddItemComp.css'

const AddItemComp = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState('');

  const location = useLocation();
  const { token } = location.state||{};
  console.log("AddItemComp token: ",token); 

  const [imgPath,setImgPath]=useState('')
  const [img,setImg]=useState('');

  const [categoryData,setCategoryData]=useState([])
  const [styleCategoryData, setStyleCategoryData]=useState([])
  const getData=async()=>{
    try{
      const response1=await axios.get('http://localhost:8000/api/v1/item/getcategories',{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      if(response1.data.data.length>0)
      setCategoryData(response1.data.data);
      const response2=await axios.get('http://localhost:8000/api/v1/item/getstylecategories',{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      if(response2.data.data.length>0)
      setStyleCategoryData(response2.data.data);
    }
    catch(e){
      console.error("Error in fetching data: ", e)
      setCategoryData([])
      setStyleCategoryData([])
    }
  }
  useEffect(()=>{
    getData();
  },[])

  const uploadImg=async()=>{
    if(img){
    const sendImg=new FormData()
    sendImg.append("file",img)
    sendImg.append("upload_preset","LenskartShoppingPortal")
    sendImg.append("cloud_name","damdh1six")
    const response = await axios.post('https://api.cloudinary.com/v1_1/damdh1six/image/upload',sendImg)
    if(response)
      setToastVariant('Success');
    setToastMessage("Image Uploaded Successfuly...");
    setShowToast(true);
    console.log("Image Uploading: ",response)
    console.log("Image Url: ",response.data.url)
    setImgPath(response.data.url)
    setImg('')
  }
  else
  alert("First Choose any file...")
  }

  const [UitemID,setUItemID]=useState('');
  const [title,setTitle]=useState('')
  const [discription,setDiscription]=useState('')
  const [itemPrice,setItemPrice]=useState('')
  const [itemCount,setItemCount]=useState('')
  const [itemDiscount,setItemDiscount]=useState('')
  const [rootCategory,setRootCategory]=useState('') 
  const [subCategory,setSubCategory]=useState('')
  const itemID=UitemID.toUpperCase();

  const AddItemData={itemID,title,discription,itemPrice,itemCount,itemDiscount,rootCategory,subCategory,imgPath}

  const add = async() => {
    const data = await axios.post('http://localhost:8000/api/v1/admin/additem',AddItemData,{
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

    setUItemID('')
    setDiscription('')
    setItemCount('')
    setItemDiscount('')
    setItemPrice('')
    setRootCategory('')
    setSubCategory('')
    setTitle('')
    console.log(data);  
  };

  return (
    <>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
          <div className="border-3 border-info border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h3 className="fw-bold text-uppercase mb-2">Add New Item</h3>
                <p className="mb-5">Please Enter Item Details to Add!!</p>
                <Form className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item ID<span className="required-asterisk">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Item ID" onChange={(e)=>setUItemID(e.target.value)} value={UitemID}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Category<span className="required-asterisk">*</span></Form.Label><br/>
                    <Form.Select name="rootCategory" id="rootCategoryID" value={rootCategory} onChange={(e)=>setRootCategory(e.target.value)}>
                    <option value=''>Item Category</option>
                      {categoryData && categoryData.map((category)=>{
                        return(
                          <option value={category.CategoryName}>
                            {category.CategoryName}
                          </option>
                        )
                      })
                      }
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Style Category<span className="required-asterisk">*</span></Form.Label>
                    <Form.Select name="subCategory" id="subCategoryID" value={subCategory} onChange={(e)=>setSubCategory(e.target.value)}>
                    <option value=''>Item Style Category</option>
                      {styleCategoryData && styleCategoryData.map((category)=>{
                        return(
                          <option value={category.CategoryName}>
                            {category.CategoryName}
                          </option>
                        )
                      })
                      }
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Name<span className="required-asterisk">*</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Name" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Image<span className="required-asterisk">*</span></Form.Label>
                    <InputGroup>
                    <Form.Control type="file" onChange={(e)=>setImg(e.target.files[0])}/>
                    <Button variant='secondary' onClick={uploadImg}>Upload Image</Button>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Discription</Form.Label>
                    <Form.Control type="text" placeholder="Enter Item Discription" onChange={(e)=>setDiscription(e.target.value)} value={discription}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Item Cost Price<span className="required-asterisk">*</span></Form.Label>
                    <Form.Control type="number" placeholder="Enter Item Price" onChange={(e)=>setItemPrice(e.target.value)} value={itemPrice}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Available Discount on Item</Form.Label>
                    <Form.Control type="number" placeholder="Enter Discount" onChange={(e)=>setItemDiscount(e.target.value)} value={itemDiscount}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-center fw-bold">Number of Items in Store<span className="required-asterisk">*</span></Form.Label>
                    <Form.Control type="number" placeholder="Enter No. of Item" onChange={(e)=>setItemCount(e.target.value)} value={itemCount} />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="info" onClick={()=>add()}>
                      Add Item
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {showToast && (
        <Toast className='d-inline-block m-1' bg={toastVariant.toLowerCase()}
        style={{position:'fixed', top:'50%', left:'50%', transform:'translate(-50%, -50%)',display:'inline-block',  minWidth: '250px', maxWidth: '90%', wordWrap: 'break-word'}} 
        onClose={() => setShowToast(false)} show={showToast}>
          <Toast.Header>
            <strong className='me-auto'>Add Item Status</strong>
            <small>Lenskart</small>
          </Toast.Header>
          <Toast.Body className="fw-bold {toastVariant === 'Dark' && 'text-white'}">
          <font color="white" size='3'>{toastMessage}</font><br/></Toast.Body>
          <div className="d-grid"><Button variant='light' onClick={()=>setShowToast(false)} style={{borderRadius:'14px',margin:'5px'}}>OK</Button></div>
        </Toast>
      )}
    </Container>
    </>
  )
}

export default AddItemComp
