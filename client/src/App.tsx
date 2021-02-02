import React from "react"
// import logo from './logo.svg';
import "./App.css"
import { Container } from "react-bootstrap"
import Header from "./components/layout/Header"
import FoodSelection from "./components/layout/FoodSelection"

function App() {
  return (
    <div className='App'>
      <Header />
      <FoodSelection />
      <Container>
        <h3>eCommerce</h3>
      </Container>
    </div>
  )
}

export default App
