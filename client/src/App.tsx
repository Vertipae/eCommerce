import React from "react"
// import logo from './logo.svg';
import "./App.css"
import { Container } from "react-bootstrap"
import Header from "./components/layout/Header"
import FoodSelection from "./components/layout/FoodSelection"
import HomeScreen from "./screens/HomeScreen"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCategoryScreen from "./screens/ProductCategoryScreen"

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <FoodSelection />
        <Container style={{ paddingTop: "0.5em" }}>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/products' component={ProductCategoryScreen} />
          </Switch>
        </Container>
      </Router>
    </div>
  )
}

export default App
