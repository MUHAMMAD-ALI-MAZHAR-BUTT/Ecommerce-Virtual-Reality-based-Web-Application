import React from 'react'
import "../CSS/Pages/Team.css"
export default function Team() {
  return (
   <>
   <div className='container-fluid'>
<div className="row text-center pt-4">
<h1>Our Team</h1>
</div>
<div className='row mx-md-5  py-1'>
<div className="col-md-3 ">
<div className="container m-0 p-0">
<div className="card ">
    <div className="slide slide1 ">
        {/* <div className="content ">
            <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
        </div> */}
        <img src='Images/Team/1.jpeg' className="TeamImages" alt="Muhammad Ali Mazhar Butt"/>
    </div>
    <div className="slide slide2 ">
        <div className="content ">
            <h3>
Muhammad Ali Mzhar Butt
            </h3>
            <p>I am a professional full stack developer.</p>

        </div>

    </div>
</div>
</div>
</div>
<div className="col-md-3 ">
<div className="container m-0 p-0">
<div className="card ">
    <div className="slide slide1  ">
        {/* <div className="content ">
            <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
        </div> */}
         <img src='Images/Team/2.png' className="TeamImages" alt="Maham Wajid"/>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h3>
Ehtesham Haider
            </h3>
            <p>I am a professional fashion designer and full stack web developer.</p>

        </div>
    </div>
</div>
</div>
</div>
<div className="col-md-3 ">
<div className="container m-0 p-0">
<div className="card ">
    <div className="slide slide1  ">
        {/* <div className="content ">
            <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
        </div> */}
         <img src='Images/Team/3.jpg' className="TeamImages" alt="Ehtesham Haider"/>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h3>
Ehtesham Haider
            </h3>
            <p>I am a professional fashion Designer and full stack developer.</p>

        </div>

    </div>

</div>



</div>


</div>
<div className="col-md-3 ">
<div className="container m-0 p-0">
<div className="card ">
    <div className="slide slide1  ">
        {/* <div className="content ">
            <div className="icon">
                <i className="fa fa-user-circle" aria-hidden="true"></i>
            </div>
        </div> */}
         <img src='Images/Team/4.jpeg' className="TeamImages" alt="Abdullah Rasheed"/>
    </div>
    <div className="slide slide2">
        <div className="content">
            <h3>
Abdullah Rasheed
            </h3>
            <p>I am a professional full stack developer.</p>

        </div>

    </div>

</div>



</div>


</div>
</div>

   </div>
   </>
  )
}
