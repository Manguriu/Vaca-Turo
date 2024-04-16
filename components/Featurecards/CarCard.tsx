import React from 'react'
import Image from 'next/image'
import "./card.css"; 

const CarCard = () => {
  return (
    <div className="container page-wrapper">
    <div className="page-inner">
      <div className="row">
        <div className="el-wrapper">
          <div className="box-up">
            <Image  className="img" src="/Car1.jpg" alt="" fill/>
            <div className="img-info">
              <div className="info-inner">
                <span className="p-name">Subaru Legacy </span>
                <span className="p-company">AWD</span>
              </div>
              <div className="a-size">Available : <span className="size">Automatic & Manual</span></div>
            </div>
          </div>
  
          <div className="box-down">
            <div className="h-bg">
              <div className="h-bg-inner"></div>
            </div>
  
            <a className="cart" href="#">
              <span className="price">$50/day</span>
              <span className="add-to-cart">
                <span className="txt">Book</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CarCard
