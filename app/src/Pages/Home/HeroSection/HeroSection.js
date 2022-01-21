import React from 'react'
import './HeroSection.css'
import { Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <div className=" mt-4 mb-5 padd-cont">
            <h1 className="display-4 hero-main-header">AI to make your official communication clear and effective</h1>
            <p className="lead hero-main-desc">Otus is your friend to help you in writing the great Linkedin Posts and saving your time in writing the emails. </p>
            <Button className = "hero-main-button" id="spl-btn" style={{margin: "auto 10px"}} > Try For Free </Button>
          </div>
        </div>
        <div className="col-lg-6 imageDiv">
          <div className="images">
            <img
              className="hero-img1"
              src='/assets/heroImg1.svg'
              alt='hero'
            />
            <img
              className="hero-img2"
              src='/assets/heroImg2.svg'
              alt='hero'
            />
            <img
              className="hero-img3"
              src='/assets/heroImg3.svg'
              alt='hero'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
