import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import {Card} from 'react-bootstrap';

const DisplayItem = () => {
  const [data, setData] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/user/display').then((res) => {
            setData(res.data);
        });
    }, []);

  return (
    <>
    <Card style={{ width:'80%', height: "80%", border: "1px solid black", margin : "auto" }}>
     <center><label><h2>All Items Are Here !</h2></label></center>
     <center>
      {data}
      </center>
     </Card> 
    </>
  )
}

export default DisplayItem



