import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Button,Nav} from 'react-bootstrap'
const NavBar = ({btn}) => {
 return (
  <Navbar bg="dark" variant="dark">
 <Link to ="/"> <Navbar.Brand style={{color: '#ADFF2F'}} ><strong>EvolvFit</strong></Navbar.Brand></Link>
  {/* <Nav className="mr-auto">
    <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link>
  </Nav> */}
  
  <Nav className='ml-auto'>
  <Link to={btn==='Admin Panel'?'/admin':'/'} className='btn btn-outline-light'>{btn}</Link>
  </Nav>
</Navbar>
 )
}

export default NavBar
