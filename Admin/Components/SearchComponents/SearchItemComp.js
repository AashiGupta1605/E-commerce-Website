import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import '../CompDesignFolder/DisplayItemComp.css'
import {Navbar,Form,Button,Row,Col,Container} from 'react-bootstrap';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

const SearchItemComp = () => {
  const location = useLocation();
  const { token } = location.state||{};
  console.log("DisplayitemComp token: ",token);

  const [search,setSearch]=useState('')

  const [SearchData,setSearchData]=useState([])

  const displaySearchItem=async(title)=>{
    try{
      const response=await axios.get(`http://localhost:8000/api/v1/item/getitems/${title}`,{
        headers:{
          Authorization:`bearer ${token}`
        }
      })
      console.log(response.data.data);
      if(response.data.data.length>0)
      setSearchData(response.data.data);
    }
    catch(e){
      console.error("Error in fetching data: ", e)
      setSearchData([])
    }
  }
  // useEffect(()=>{
  //   displaySearchItem();
  // },[])

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary justify-content-between" sticky="top">
      <Form inline>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" onClick={()=>displaySearchItem(search)}>Search</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    <Container>
    <Row>
      {SearchData && SearchData.map((item)=>{
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
              <Button className='fw-bold' variant='outline-danger' style={{paddingLeft:'25px', paddingRight:'25px'}}>Delete</Button>
            </MDBCardBody>
          </MDBCard>
          </Col>
        )
      })}
    </Row>
    </Container>
    </div>
  )
}

export default SearchItemComp
