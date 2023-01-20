import React from 'react'
import { useState } from 'react'
import "../CSS/Pages/ContactUs.css"
function ConactUs() {
  const [Contact_Form_Data,Set_Contact_Form_Data] = useState({
    "Subject":"",
    "Email":"",
    "Message":""
  });
  function Contact_Form(Input_Field)
  {

  }
  return (
    <>
    <div className="container-fluid px-sm-5 pb-sm-3 ContactUs-Cover">
      <div className='row '>
       <h1 className='ContactUs-Heading  pb-3'> Contact Us</h1>
      </div>
    <div className='row '>
    <div className='col '>
      <img src="./Images/ContactUs/ContactUs.jpg" className="ContactUs-Image "alt="Contact Us"/>
      </div>
      <div className='col Form-Column'>
      <form>
      <div class="mb-3">
    <label for="Input-Name" class="form-label">Enter Name:</label>
    <input type="text" class="form-control" id="Name" name='Name'
    placeholder='Alexander Philips'
    />
  </div>
  <div class="mb-3">
    <label for="Input-Subject" class="form-label">Enter Subject:</label>
    <input type="text" class="form-control" id="Subject" name="Subject"
    placeholder='Type here'
    />
  </div>
  <div class="mb-3">
    <label for="Input-Email1" class="form-label">Enter you Email address:</label>
    <input type="email" class="form-control" id="Email" name="Email" aria-describedby="emailHelp"
    placeholder='ali123mazhar@gmail.com'
    />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="Input-Message" class="form-label">Enter Message</label>
  <textarea class="form-control" id="Message" rows="3" autoComplete='off'
  name="Message"
  ></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
    </div>
    </>
  )
}

export default ConactUs