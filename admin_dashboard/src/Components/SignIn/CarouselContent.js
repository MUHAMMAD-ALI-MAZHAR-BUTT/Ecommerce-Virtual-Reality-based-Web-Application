import React from 'react'
import "../../styles/SignIn/Carousel.css"
export default function CarouselContent() {
const Carousel_Content=[
    {
        ImageAddress:"/Images/SignIn/1.jpg",
        Title:"Metavrse Ecommerce Store",
        Description:"Welcome to Metaverse Ecommerce Store",
        AltText:"Welcome to Metaverse Ecommerce Store",
    },
    {
        ImageAddress:"/Images/SignIn/3.jpg",
        Title:"Metavrse Ecommerce Store",
        Description:"Welcome to Metaverse Ecommerce Store",
        AltText:"Welcome to Metaverse Ecommerce Store",
    },
    {
        ImageAddress:"/Images/SignIn/2.jpg",
        Title:"Metavrse Ecommerce Store",
        Description:"Welcome to Metaverse Ecommerce Store",
        AltText:"Welcome to Metaverse Ecommerce Store",
    },
    {
        ImageAddress:"/Images/SignIn/4.jpeg",
        Title:"Metavrse Ecommerce Store",
        Description:"Welcome to Metaverse Ecommerce Store",
        AltText:"Welcome to Metaverse Ecommerce Store",
    },
    {
        ImageAddress:"/Images/SignIn/5.jpg",
        Title:"Metavrse Ecommerce Store",
        Description:"Welcome to Metaverse Ecommerce Store",
        AltText:"Welcome to Metaverse Ecommerce Store",
    }
]
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
</div>
  <div className="carousel-inner ">
  {    Carousel_Content.map((element,index)=>
        <div className={`carousel-item ${index===0?'active':'notactive'}`} >
         <img src={element.ImageAddress} className="d-block w-100 Carousel-Image" alt={element.AltText}/>
         <div className="carousel-caption d-none d-md-block">
           <h5>{element.Title}</h5>
           <p>{element.Description}</p>
         </div>
       </div>
    )}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
