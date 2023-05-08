import React from 'react'
import Products from './Products'

import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Banner Starts Here */}
      <section className="banner">
        <div className="banner-text">
          <h1>
            Get 50% Off on <br /> Selected categories
            <br />
          </h1>
        </div>
        <img className="background" src="./assets/ad.png" alt="Background Image" />
        <div className="banner-images-top">
          <img
            className="banner-img1"
            src="./assets/image 3.png"
            alt="Product Photo"
          />
          <img
            className="banner-img2"
            src="./assets/image 4.png"
            alt="Product Photo"
          />
          <img
            className="banner-img3"
            src="./assets/image 5.png"
            alt="Product Photo"
          />
          <img
            className="banner-img4"
            src="./assets/image 6.png"
            alt="Product Photo"
          />
          <img
            className="banner-img5"
            src="./assets/image 7.png"
            alt="Product Photo"
          />
          <img
            className="banner-img6"
            src="./assets/image 8.png"
            alt="Product Photo"
          />
          <img
            className="banner-img7"
            src="./assets/image 9.png"
            alt="Product Photo"
          />
          <img
            className="banner-img8"
            src="./assets/image 10.png"
            alt="Product Photo"
          />
          <img
            className="banner-img9"
            src="./assets/image 11.png"
            alt="Product Photo"
          />
          <img
            className="banner-img10"
            src="./assets/image 12.png"
            alt="Product Photo"
          />
        </div>
        <div className="banner-images">
          <img
            className="banner-image2"
            src="./assets/image 2.png"
            alt="Product Photo"
          />
          <img
            className="banner-image1"
            src="./assets/image 1.png"
            alt="Product Photo"
          />
        </div>
        
      </section>

      <Products />

      <NavLink to="/Products" className="btn-btn"><i className="fa-fa-sign-in-me-2"></i>See More</NavLink>

    </div>
  )
}

export default Home
