import React from "react"
import {
  Navbar,
  Nav,
  // NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

function Header() {
  return (
    <div>
      <Navbar bg='success' expand='lg' variant='dark' collapseOnSelect>
        <Navbar.Brand href='#home'>Pineapple Mint</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Topical</Nav.Link>
            {/* <NavDropdown title='Products' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Dairy</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Sweets</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Coffee</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-light'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
