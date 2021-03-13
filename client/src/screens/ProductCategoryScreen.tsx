import React, { useState, useEffect } from "react"
import { Row, Col } from "react-bootstrap"
// import images from "../images"
import BASE_URL from "../utils/baseurl"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Product from "./Product.type"
import ProductCard from "../components/ProductCard"

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
  const [filter] = useState<string[] | undefined>(categories)
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
              <ProductCard product={product} keyz={i} />
            </Col>
          ))}
      </Row>
    </div>
  )
}

export default ProductCategoryScreen
