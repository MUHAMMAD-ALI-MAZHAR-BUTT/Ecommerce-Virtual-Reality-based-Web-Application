import React from 'react'
import "../CSS/Pages/Services.css"
export default function Services() {
  return (
   <>
   <div className='container pb-4'>
    <div className="row text-center">
        <h1>Services</h1>
    </div>
    <div className='row pt-1'>
    <div className="col">
  <a className="card1" href="#">
    <h1><img src="Images/Services/featured.png" className="FriendlySupport" alt="Great Features"/></h1>
   
    <h3>GREAT FEATURES</h3>
    <p className=""><b>Metamart</b> provides advanced features like advanced searching,Virtual reality Mode,3D Tour,
    Bespoke,Customer best fitting size suggestion on basis of customer's body measurements etc.</p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
  <div className="col">
  <a className="card1" href="#">
    <h1><img src="Images/Services/1.png" className="FriendlySupport" alt="Friendly support"/></h1>
    <h3>FRIENDLY SUPPORT</h3>
    <p className="">With the help of chatbot you can contact us for urgent query and if you want
    to send some important message then you can also contact us via our official email
    <u><b> metamart@gmail.com</b></u>
    </p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
  <div className="col">
  <a className="card1" href="#">
  <h1><img src="Images/Services/vrglasses.png" className="FriendlySupport" alt="Virtual Reality"/></h1>
  
    <h3>Vritual Reality</h3>
    <p className="">Metamart provides Virtual reality based E-Commerce store where customer can
    visit the store and get real time feeling of shopping.Other than this customer can also do 3D tour of store.
    
    </p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
   </div>
   <div className='row'>
  
  <div className="col">
  <a className="card1" href="#">
  <h1><img src="Images/Services/shoppingcart.png" className="FriendlySupport" alt="Savve money"/></h1>
  
    <h3>SAVE TIME & MONEY</h3>
    <p className=""> <b>Metamart</b> provides the best high quality products in cheap prices and also
    with discounts.Metamart is one of the best E-commerce website in the world.
    </p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
  <div className="col">
  <a className="card1" href="#">
  <h1><img src="Images/Services/Bespoke.png" className="FriendlySupport" alt="Friendly support"/></h1>
  
    <h3 className='text-center'>BeSpoke</h3>
    <p className="">Customer can order custom outerwears.Customer can contact us by submitting
    desired order detals, measurement, price range,color,material type etc.
    </p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
  <div className="col">
  <a className="card1" href="#">
  <h1><img src="Images/Services/jacket.png" className="FriendlySupport" alt="Customer Size suggestion"/></h1>
    <h3>Size Suggestion</h3>
    <p className="">On the basis of customer body measurements, <b>Metamart</b> will suggest the customer best fitting
    size suggestion to the customer that is really a great helpful feature.
    </p>
    <div className="go-corner" href="#">
      <div className="go-arrow">
        →
      </div>
    </div>
  </a>
  </div>
   </div>
   </div>
   </>
  )
}
