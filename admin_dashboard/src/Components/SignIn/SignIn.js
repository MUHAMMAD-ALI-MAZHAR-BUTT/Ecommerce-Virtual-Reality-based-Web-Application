import React from 'react'
import "../../styles/SignIn/SignIn.css"
import CarouselContent from './CarouselContent'
import SignInSection from './SignInSection'
export default function SignIn() {
  return (
   <>
    <div className="container-fluid BackGround ">
        <div className="row ">
            <div className="col-10 mt-5 offset-1 SignInBox ">
              <div className="row Inner-Section">
                <div className="col-md-6 LeftSection p-0">
                <CarouselContent/>
                </div>
                <div className="col-md-6 RightSection p-0">
<SignInSection/>
                </div>
              </div>
            </div>
           
        </div>
    </div>
   </>
  )
}
