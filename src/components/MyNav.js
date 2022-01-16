
import React from 'react';
import '../App.css'
import { Navbar,Nav,NavDropdown,Offcanvas,Form,FormControl } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { googleProvider } from '../config/authMethods';
import socialMediaAuth from '../service/auth';

function MyNav(){
  const handleClick = async (Provider) => {
    const res =await socialMediaAuth(Provider);

  }
  return(
    <>
<Navbar expand={false} className="MyNav">
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Read And Return </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#action1">Home</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>

    <Navbar.Brand href="#" >Read And Return </Navbar.Brand>
        <Form className="d-flex" style={{width:'80px'}}
             onFocus={(e) => {
              e.target.style.width='100px' ;
              
             // e.target.style.-webkit-transition: width 0.4s ease-in-out;
             }}
             onBlur={(e) => {
              e.target.style.width='30px' ;
            }}
        >
          <FormControl
            type="search"
            placeholder="Search"
            //className="me-2"
            htmlSize="3%"
            aria-label="Search"
          />
        </Form>
        <Button className="Button"> <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"><g><rect fill="none" height="24" width="24" y="0"/><g><g><path d="M20,8v12c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V8c0-1.86,1.28-3.41,3-3.86V2h3v2h4V2h3v2.14C18.72,4.59,20,6.14,20,8z M6,12v2h10v2h2v-4H6z"/></g></g></g></svg></Button> 
        <Button className="Button"> <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg></Button> 
        <Button className="Button"
                onClick={()=> handleClick(googleProvider)}
        > <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="40" viewBox="0 0 24 24" width="40"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"/></g></svg></Button>
  </Navbar>

    </>
  )

}

export default MyNav