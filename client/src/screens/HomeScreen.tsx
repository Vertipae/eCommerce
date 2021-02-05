import React from "react"
import { Carousel, Image } from "react-bootstrap"
import images from "../images"

function HomeScreen() {
  return (
    <div>
      <Carousel pause='hover'>
        <Carousel.Item>
          <Image
            // className='d-block w-50'
            src={images.Vegetables}
            width='800px'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3 className='carouselLabel'>Fresh vegetables</h3>
            <p className='carouselLabel'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            // className='d-block w-100'
            src={images.Yammy}
            width='800px'
            // src='../images/vegetables.jpeg/800x400?text=Second slide&bg=282c34'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3 className='carouselLabel'>Tasty homemade food</h3>
            <p className='carouselLabel'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className='d-block w-100'
            src={images.Pancakes}
            width='800px'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h3 className='carouselLabel'>Delicious breakfast</h3>
            <p className='carouselLabel'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeScreen
