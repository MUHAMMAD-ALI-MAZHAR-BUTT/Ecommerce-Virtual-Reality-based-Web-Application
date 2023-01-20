import React from 'react'
import "../CSS/Pages/BannerCarousel.css"
export default function BannerCarousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide px-0 mx-0" data-bs-ride="carousel">
    <div className="carousel-inner mx-0">
      <div className="carousel-item active">
        <img src="Images/HomeLandingPage/first.jpg" className="d-block w-100 HomeLandingPageCarouselImages" alt="..." />
      <button type="button" className='VRModeButton py-2 px-3'>Explore VR Mode</button>
      </div>
      <div className="carousel-item">
        <img src="Images/HomeLandingPage/first.jpg" className="d-block w-100 HomeLandingPageCarouselImages" alt="..." />
        <button type="button" className='VRModeButton py-2 px-3'>Explore VR Mode</button>
      </div>
      <div className="carousel-item">
        <img src="Images/HomeLandingPage/first.jpg" className="d-block w-100 HomeLandingPageCarouselImages" alt="..." />
        <button type="button" className='VRModeButton py-2 px-3'>Explore VR Mode</button>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
