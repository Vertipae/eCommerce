import React, { useState, useEffect } from "react"
import { Card, Row, Col, Button } from "react-bootstrap"
import images from "../images"
import BASE_URL from "../utils/baseurl"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Product from "./Product.type"

// type Product = {
//   name: string
//   description: string
//   category: string
//   price: number
//   image: string
//   countInStock: number
// }

function ProductCategoryScreen(): JSX.Element {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const categories: Array<string> | undefined = useQuery()
    .get("category")
    ?.split("_")
  const [filter, setFilter] = useState<string[] | undefined>(categories)
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    try {
      const products = await axios.get(BASE_URL + "/api/products")
      setProducts(products.data)
    } catch (e) {
      console.log(e)
    }
  }
  console.log(filter)

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])
  console.log(products)

  return (
    <div>
      <Row>
        {products
          .filter(
            (product: Product) =>
              categories?.includes(product.category) || !categories
          )
          .map((product: Product, i: number) => (
            <Col key={i} sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant='top' src={product.image} />
                <Card.Body>
                  <Card.Title>
                    {product.name} ${product.price}
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  {/* <Card.Link href='#'>Card Link</Card.Link> */}
                  <Button variant='warning'>Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default ProductCategoryScreen
