import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Forgotpassword() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm='6'>
            <img src="img/home/forgot.jpg" className='w-100 image' alt="" />
          </Col>
          <Col sm='6 mt-5'>
            <h3>Forgot <span className='signup-form-text'>Password</span> </h3>
            <p>Lorem ipsum dolor sit, amet <span className='signup-form-text'> consectetur adipisicing.</span> </p>
            <form>
              <input type="tel" name='phone' placeholder='Phone' className='form-control mt-3' />
              <input type="email" name='email' placeholder='Email' className='form-control mt-3' />
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-primary" type="button">Submit</button>
                <Link to="/signup" className="d-grid gap-2 mt-2"><button className="btn btn-primary" type="button">Go to Signup</button>
                </Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Forgotpassword
