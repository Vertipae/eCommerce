import React from "react"
import { Nav, NavDropdown } from "react-bootstrap"

function FoodSelection() {
  return (
    <div style={{ paddingTop: "0.3em" }}>
      <Nav fill>
        <NavDropdown title='Fruits, Vegetables' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruits_vegetables_berries'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='4.2' href='/products?category=fruits'>
            Fruits
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3' href='/products?category=vegetables'>
            Vegetables
          </NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item eventKey='4.4'>Herbs</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.4' href='/products?category=berries'>
            Berries
          </NavDropdown.Item>
        </NavDropdown>
        {/*  */}

        <NavDropdown title='Dairy, Eggs' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruits_vegetables'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.1'>Milks</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Curds</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>
            Sour Creams, Creams
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Cheese</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item eventKey='4.4'>Eggs</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Meat, Chicken, Fish' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruits_vegetables'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.1'>Red Meats</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Bacon</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Chicken</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item eventKey='4.4'>Fish</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Snacks' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruits_vegetables'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.1'>Cookies</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Chips</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Nuts, Seeds</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Healthy Snacks</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title='Coffee' id='nav-dropdown'>
          <NavDropdown.Item
            href='/products?category=fruits_vegetables'
            eventKey='4.1'
          >
            All
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='4.1'>Ground Coffee</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Instant Coffee</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>Espresso</NavDropdown.Item>
          {/* <NavDropdown.Divider /> */}
          <NavDropdown.Item eventKey='4.4'>Bottled Coffee</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  )
}

export default FoodSelection
