import React from 'react'
import './HeroCard.css'
import { Button } from 'react-bootstrap';

const HeroCard = ({valuee,sno, header, body, imgSrc}) => {
  console.log(valuee);
  return (
    <div className="container my-5">
      {
        (sno%2 === 1 )
        ?
      <>
      <div  className="reverse-order row">
        <div className="col-lg-6">
          <div className=" mt-4 mb-5">
            <h1 className="display-3 hero-count">0{sno}</h1>
            <h1 className="display-4 hero-header">{header}</h1>
            <p className="lead hero-desc">{body} </p>
            <Button className = "hero-button"  id="spl-btn"  style={{margin: "auto 10px", borderRadius: "10px" }}  variant="outline-primary"> Try For Free </Button>
          </div>
        </div>
        <div className="col-lg-6 pre-image">
          <img className="w-70 shadow imgSize" src={imgSrc} alt="n/a" />
        </div>
      </div>
      </>
      :
      <div className="row in-order">
        <div className="col-lg-6 abc">
          <div className=" mt-4 mb-5">
            <h1 className="display-3 hero-count">0{sno}</h1>
            <h1 className="display-4 hero-header">{header}</h1>
            <p className="lead hero-desc">{body}</p>
            <Button className = " hero-button" id="spl-btn" style={{margin: "auto 10px", borderRadius: "10px" }} > Try For Free </Button>
          </div>
        </div>
        <div className="col-lg-6 pre-image">
          <img className="shadow imgSize" src={imgSrc} alt="n/a" />
        </div>
      </div>
      }
    </div>
  )
}

export default HeroCard;
