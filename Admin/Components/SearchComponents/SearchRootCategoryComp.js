import React from 'react'
import {Navbar,Form,Button,Row,Col} from 'react-bootstrap';

const SearchRootCategoryComp = () => {
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
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
    </div>
  )
}

export default SearchRootCategoryComp
