import React from "react"
import { Nav, NavDropdown } from "react-bootstrap"

function FoodSelection() {
  return (
    <div style={{ paddingTop: "0.3em" }}>
      <Nav fill>
        <NavDropdown title='Fruits, Vegetables' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruitsandvegetables'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='4.2'>Fruits</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Vegetables</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
        {/*  */}

        <NavDropdown title='Dairy, Eggs' id='nav-dropdown'>
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Meat, Chicken, Fish' id='nav-dropdown'>
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Snacks' id='nav-dropdown'>
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Coffee' id='nav-dropdown'>
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  )
}

export default FoodSelection
