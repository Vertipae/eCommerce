import React, { useState } from "react"
import { Card, Row, Col, Button, Form } from "react-bootstrap"
import Product from "../screens/Product.type"

function ProductCard({ product, keyz }: { product: Product; keyz: number }) {
  const [qty, setQty] = useState(product.countInStock <= 0 ? 0 : 1)
  return (
    <Col key={keyz} sm={12} md={6} lg={4} xl={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className='productCardImg'
          variant='top'
          src={product.image}
        />
        <Card.Body>
          <Card.Title>
            {product.name} ${product.price}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col>
              {" "}
              <Button
                variant='outline-dark'
                onClick={() => {
                  if (qty > 0) {
                    setQty(qty - 1)
                  }
                }}
              >
                -
              </Button>
            </Col>
            <Col>
              <Form.Group as={Row} controlId='formGridPassword'>
                {/* <Form.Label>Qty</Form.Label> */}
                <Form.Control
                  type='number'
                  //   min='1'
                  //   max='10'
                  value={qty}
                  onChange={(e) => setQty(Number.parseInt(e.target.value))}

                  // placeholder='Qty'
                />
              </Form.Group>
            </Col>
            <Col>
              {" "}
              <Button
                variant='success'
                onClick={() => {
                  if (product.countInStock > qty) {
                    setQty(qty + 1)
                  }
                }}
              >
                +
              </Button>
            </Col>
          </Row>

          {product.countInStock > 0 ? (
            <Button variant='warning'>Buy</Button>
          ) : (
            <Button variant='warning' disabled>
              Out of stock
            </Button>
          )}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
