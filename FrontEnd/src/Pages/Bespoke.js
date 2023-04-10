import React from 'react'
import { useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import "../CSS/Pages/Bespoke.css";
import { HexColorPicker } from "react-colorful";
import { motion } from "framer-motion";
import 'animate.css';
export default function Bespoke(props) {
  const navigate = useNavigate();
  const [showmodal,setshowmodal]=useState(0);
  const [Selectedcolor, setColor] = useState("#aabbcc");
  const [BeSpokeData,SetBeSpokeData]=useState(
    {
      "Email":`${props.useremail}`,
      "Gender":"",
      "MaterialType":"",
      "JacketColor":"",
      "JacketDescription":"",
      "MinimumPrice":"80",
      "MaximumPrice":"",
      "PrefferedSize":"",
      "Waist":"",
      "Chest":"",
      "ArmLength":"",
      "OrderDate":"",
      "Status":"Pending"
    }
  )
  function GenderRadioValue() {
    var ele = document.getElementsByName('gender');
    for(var i = 0; i < ele.length; i++) {
        if(ele[i].checked)
            SetBeSpokeData({...BeSpokeData,"Gender":String(ele[i].value)});
    }
}
function MaterialTypeRadioValue() {
  var ele = document.getElementsByName('MaterialType');
  for(var i = 0; i < ele.length; i++) {
      if(ele[i].checked)
          SetBeSpokeData({...BeSpokeData,"MaterialType":String(ele[i].value)});
  }
}
function JacketColorValue() {
   SetBeSpokeData({...BeSpokeData,"JacketColor":String(Selectedcolor)});
}
function PrefferedSizeValues() {
  var ele = document.getElementsByName('PrefferedSize');
  for(var i = 0; i < ele.length; i++) {
      if(ele[i].checked)
          SetBeSpokeData({...BeSpokeData,"PrefferedSize":String(ele[i].value)});
  }

}
function HandleBespokeInputs(e)
{
  SetBeSpokeData({...BeSpokeData,[e.target.name]:String(e.target.value)});
  
console.log(BeSpokeData);
}
  useEffect(()=>
  {
    let newDate = new Date()
    let date_raw = newDate.getDate();
    let month_raw = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let date, month;
    if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
    if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()} 
    let Date_=date+"-"+month+"-"+year;
    SetBeSpokeData({...BeSpokeData,["OrderDate"]:String(Date_)});
    console.log(BeSpokeData);
  },[])
useEffect(()=>{
  

const navigateToFormStep = (stepNumber) => {
  /**
   * Hide all form steps.
   */
  document.querySelectorAll(".form-step").forEach((formStepElement) => {
      formStepElement.classList.add("d-none");
  });
  /**
   * Mark all form steps as unfinished.
   */
  document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
      formStepHeader.classList.add("form-stepper-unfinished");
      formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
  });
  /**
   * Show the current form step (as passed to the function).
   */
  document.querySelector("#step-" + stepNumber).classList.remove("d-none");
  /**
   * Select the form step circle (progress bar).
   */
  const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
  /**
   * Mark the current form step as active.
   */
  formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
  formStepCircle.classList.add("form-stepper-active");
  /**
   * Loop through each form step circles.
   * This loop will continue up to the current step number.
   * Example: If the current step is 3,
   * then the loop will perform operations for step 1 and 2.
   */
  for (let index = 0; index < stepNumber; index++) {
      /**
       * Select the form step circle (progress bar).
       */
      const formStepCircle = document.querySelector('li[step="' + index + '"]');
      /**
       * Check if the element exist. If yes, then proceed.
       */
      if (formStepCircle) {
          /**
           * Mark the form step as completed.
           */
          formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
          formStepCircle.classList.add("form-stepper-completed");
      }
  }
};
/**
* Select all form navigation buttons, and loop through them.
*/
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
  /**
   * Add a click event listener to the button.
   */
  formNavigationBtn.addEventListener("click", () => {
      /**
       * Get the value of the step.
       */
      const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
      /**
       * Call the function to navigate to the target form step.
       */
      navigateToFormStep(stepNumber);
  });
});});
const BespokeFormSubmit=async()=>
{
   const response=await fetch("http://localhost:5000/bespoke",
  {
    method:"post",
    body:JSON.stringify(BeSpokeData),
    headers:{'Content-Type':'application/json'},
 });
 if(response.status===200)
 {
  console.log("BeSpoke form data successfully submitted");
  setshowmodal(1);
 }
 else
 {
  console.log("Data not submitted");
 } 
}
function ChangeRoute()
{
  navigate('/');
}
  return (
   <>
   <div className="container-fluid BespokeContainer pb-5">
    <div className='row mx-md-5 py-3'>
    <div>
    <h1 className='mt-3 mb-5'>Order Your Custom Outerwear</h1>
    <div id="multi-step-form-container " className=''>
        {/* <!-- Form Steps / Progress Bar --> */}
        <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
            {/* <!-- Step 1 --> */}
            {/* <!-- Step 2 --> */}
            <li className="form-stepper-unfinished text-center form-stepper-list" step="1">
                <a className="mx-2" >
                    <span className="form-stepper-circle text-muted">
                        <span><b>1</b></span>
                    </span>
                    <div className="label text-muted">Gender</div>
                </a>
            </li>
            {/* <!-- Step 3 --> */}
            <li className="form-stepper-unfinished text-center form-stepper-list" step="2">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>2</b></span>
                    </span>
                    <div className="label text-muted">Material Type</div>
                </a>
            </li>
            <li className="form-stepper-unfinished text-center form-stepper-list" step="3">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>3</b></span>
                    </span>
                    <div className="label text-muted">Color</div>
                </a>
            </li>
            <li className="form-stepper-unfinished text-center form-stepper-list" step="4">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>4</b></span>
                    </span>
                    <div className="label text-muted">Measurements</div>
                </a>
            </li>
            <li className="form-stepper-unfinished text-center form-stepper-list" step="5">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>5</b></span>
                    </span>
                    <div className="label text-muted">Details</div>
                </a>
            </li>
            <li className="form-stepper-unfinished text-center form-stepper-list" step="6">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>6</b></span>
                    </span>
                    <div className="label text-muted">Price Range</div>
                </a>
            </li>
            <li className="form-stepper-unfinished text-center form-stepper-list" step="7">
                <a className="mx-2">
                    <span className="form-stepper-circle text-muted">
                        <span><b>7</b></span>
                    </span>
                    <div className="label text-muted">Confirmation</div>
                </a>
            </li>
        </ul>
        {/* <!-- Step Wise Form Content --> */}
        <form id="userAccountSetupForm " className='' name="userAccountSetupForm" enctype="multipart/form-data" method="POST">
      <div id="step-1"  className='row MajorInnerContainer form-step' >
        <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row p-4 ">
        <div className="col-md-6 ">
<h4>
Select the Gender : 
</h4>
        </div>
        <div className='col-md-6 '> 
        <form>
<div className="form-check">
<input className="form-check-input" type="radio"  defaultChecked name="gender" value="Male" />
<label className="form-check-label-Outerwear-Type" >
 Male
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="gender"  value="Female" />
<label className="form-check-label-Outerwear-Type" >
Female
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="gender" value="Others" defaultChecke />
<label className="form-check-label-Outerwear-Type" >
Others
</label>
</div>
        </form>

        </div>
      </div>
      <div className='row mt-4 mb-3 d-flex justify-content-evenly'>
      <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-md-4 p-1" type="button" step_number="2"
       onClick={GenderRadioValue}
      >Next</button>
   
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">
        <motion.div
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: -360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 360,
      damping: 100
    }}>
          <img src="/Images/Bespoke/1.jpg" className="RightSectionOfForm animate__animated animate__bounce animate__repeat-animate__infinite"
           alt="Select the Gender" />
          </motion.div>
        </div>
      </div>
      <div id="step-2" className="form-step d-none row MajorInnerContainer">
        <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row p-4 ">
        <div className="col-md-6 ">
<h4>
Select the Outerwear Material Type : 
</h4>
        </div>
        <div className='col-md-6 '> 
        <form>
        <div className="form-check">
<input className="form-check-input" type="radio" name="MaterialType" value="Leather" defaultChecked/>
<label className="form-check-label-Outerwear-Type">
  Leather Jacket
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="MaterialType" value="Puffer" />
<label className="form-check-label-Outerwear-Type" >
  Puffer Jacket
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="MaterialType" value="Sweat" />
<label className="form-check-label-Outerwear-Type">
 Sweat Jacket
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="MaterialType" value="Sports" />
<label className="form-check-label-Outerwear-Type">
 Sports Jacket
</label>
</div>

        </form>

        </div>
      </div>
      <div className='row mt-4'>
      
<button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-sm-2 p-1" type="button" step_number="1">Prev</button>
  <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-md-3 p-1" type="button" step_number="3"
  onClick={MaterialTypeRadioValue}
  >Next</button>
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">
      
    <img src="/Images/Bespoke/4.jpg" className="RightSectionOfForm animate__animated animate__bounce animate__repeat-animate__infinite" alt="Select the Material type of the Jacket" />
      
        </div>
      </div>
      <div id="step-3" className="form-step d-none row MajorInnerContainer">
        <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row p-4 ">
      
        <div className="mb-3">
        <h4>
Select the color of the Outerwear: 
</h4>
<div className='row'>
  <div className='col'>
  <div className="showColor m-md-3" style={{'backgroundColor':`${Selectedcolor}`}}>

  </div>
  </div>
  <div className='col'>
  <HexColorPicker color={Selectedcolor} onChange={setColor} className="PickColor"/>;
  </div>
</div>
</div>
       
      </div>
      <div className='row mt-4'>
<button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-sm-2 p-1" type="button" step_number="2">Prev</button>
  <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-md-3 p-1" type="button" step_number="4"
  onClick={JacketColorValue}
  >Next</button>
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">

          <img src="/Images/Bespoke/3.avif" className="RightSectionOfForm
          animate__animated animate__bounce animate__repeat-animate__infinite
          " alt="Input brief details about Jacket" />
      
        </div>
      </div> 
      <div id="step-4" className="form-step d-none row MajorInnerContainer">
        <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row ps-md-5 ps-2">
        <div className='row'>
        </div>
        <div className='row'>
          <h5 className='text-center'>Preffered Size</h5>
        </div>
<form className='row p-0 m-0'>
<div className="col-md-6">
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="Extra Small"/>
  <label className="form-check-label" >
Extra Small
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="Small" defaultChecked />
  <label className="form-check-label" >
Small
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="Medium" defaultChecked />
  <label className="form-check-label" >
Medium
  </label>
</div>
</div>
<div className='col-md-6' >
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="Large"/>
  <label className="form-check-label" >
Large
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="Extra Large" />
  <label className="form-check-label" >
Extra Large
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="PrefferedSize" value="2XL" />
  <label className="form-check-label">
2XL
  </label>
</div>
</div>
</form>
<div className="row py-3">
  <h5 className='text-center'>Measurements</h5>
</div>
<div className='row'>
<form>
<div className="input-group my-2">
  <h5 className='me-md-3 mt-2'>Chest :</h5>
  <input type="number" className="form-control" min={5} name="Chest"
   aria-label="Dollar amount (with dot and two decimal places)"
  onChange={HandleBespokeInputs}
  />
  <span className="input-group-text">cm</span>
</div>
<div className="input-group my-2">
  <h5 className='me-md-3 mt-2'>Waist :</h5>
  <input type="number" className="form-control" min={5} name="Waist" aria-label="Dollar amount (with dot and two decimal places)"
   onChange={HandleBespokeInputs} />
  <span className="input-group-text">cm</span>
</div>
<div className="input-group my-2">
  <h5 className='me-md-3 mt-2'>Arm Length :</h5>
  <input type="number" className="form-control" min={5} name="ArmLength" aria-label="Dollar amount (with dot and two decimal places)" 
   onChange={HandleBespokeInputs}
  />
  <span className="input-group-text">cm</span>
</div>

</form>
</div>
      </div>
      <div className="alert alert-primary row my-2 mx-2" role="alert">
  Note : The Preffered selected size will get highest priority over the custom inputs.
</div>
      <div className='row mt-4'>
<button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-sm-2 p-1" type="button" step_number="3">Prev</button>
  <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-md-3 p-1" type="button" step_number="5"
  onClick={PrefferedSizeValues}
  >Next</button>
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">

          <img src="/Images/Bespoke/1.avif" className="RightSectionOfForm
          animate__animated animate__bounce animate__repeat-animate__infinite
          " alt="Input brief details about Jacket" />
        </div>
      </div> 
       <div id="step-5" className="form-step d-none row MajorInnerContainer">
         <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row p-4 ">
        <form>
        <div className="mb-3">
        <h4>
Enter brief Detail about custom Outerwear : 
</h4>
  <textarea className="form-control"  onChange={HandleBespokeInputs} name="JacketDescription" rows="5" ></textarea>
</div>
        </form>
      </div>
      <div className='row mt-4'>
<button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-sm-2 p-1" type="button" step_number="4">Prev</button>
  <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3 offset-md-3 p-1" type="button" step_number="6">Next</button>
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">

          <img src="/Images/Bespoke/3.avif" className="RightSectionOfForm
          animate__animated animate__bounce animate__repeat-animate__infinite
          " alt="Input brief details about Jacket" />
        </div>
      </div>     
      <div  id="step-6" className='row MajorInnerContainer form-step d-none' >
        <div className="col-6 LeftSectionOfMultiStepForm">
      <div className="row p-4 ">
        <form>
<div className='row my-3'>
<h4>  Enter the Price Range :</h4>
<h6 style={{'opacity':'0.7'}}>Select the minimum and maximum price range from the below slider.</h6>
</div>
 <div className='row '>
<div className="input-group col-3 d-flex">
<h5 className='me-2'>Minimum Price</h5>
  <input type="number" className="form-control"  disabled value={80} min={80} aria-label="Dollar amount (with dot and two decimal places)" 
   name="MinimumPrice"

   onChange={HandleBespokeInputs}/>
  <span className="input-group-text">$</span>
</div>
<div className='col-1'>
  <hr className='LineRange'/>
</div>
<div className="input-group col-3 d-flex">
<h5 className='me-2'>Maximum Price</h5>
  <input type="number" className="form-control" min={80} aria-label="Dollar amount (with dot and two decimal places)" 
  name="MaximumPrice"
   onChange={HandleBespokeInputs}
  />
  <span className="input-group-text">$</span>
</div>
 </div>
        </form>
      </div>
      <div className='row mt-4 d-flex justify-content-evenly'>
                    <button className=" NextButtonMultiStepForm1 col-3 p-1 button btn-navigate-form-step" type="button" step_number="5">Prev</button>
                    <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3  p-1" type="button" step_number="7">Next</button>
               
</div>
        </div>
        <div className="col-6 RightSectionOfMultiStepForm">

          <img src="/Images/Bespoke/2.jpg" className="RightSectionOfForm
          animate__animated animate__bounce animate__repeat-animate__infinite
          " alt="Input the price range" />
        </div>
      </div>
      <div  id="step-7" className='row MajorInnerContainer form-step d-none' >
      <div className="row px-md-5 py-md-2  me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Gender : </h5>
      </div>
         <div className='col-6 '>
         <input type="text" className="form-control" value={`${BeSpokeData['Gender']}`}/>
         </div>
      </div>
      <div className="row px-md-5  py-md-2 me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Material Type : </h5>
      </div>
         <div className='col-6 '>
         <input type="text" className="form-control" value={`${BeSpokeData['MaterialType']}`}/>
         </div>
      </div>
      <div className="row px-md-5 py-md-2  me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Jacket Color: </h5>
      </div>
         <div className='col-6 '>
         <div className="FinalColor ps-sm-5 py-2" style={{'backgroundColor':`${Selectedcolor}`}}></div>
         </div>
      </div>
      <div className="row px-md-5 py-md-2  me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Description: </h5>
      </div>
         <div className='col-6 '>
         <textarea type="text" className="form-control" value={`${BeSpokeData['JacketDescription']}`}/>
         </div>
      </div>
      <div className="row px-md-5 py-md-2  me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Measurements: </h5>
      </div>
         <div className='col-6 '>
         <div className="row">
            <div className="col pt-2">
            <h5 className='ps-md-5'>Preffered Size :</h5>
            </div>
            <div className='col'>
          
          <input type="text" className="form-control" value={`${BeSpokeData['PrefferedSize']}`}/>
            </div>
          </div>
          <div className="row my-1">
            <div className="col pt-2">
            <h5 className='ps-md-5'>Waist :</h5>
            </div>
            <div className='col'>
            <div className="input-group">
          <input type="text" className="form-control" value={`${BeSpokeData['Waist']}`}/>
         <span className="input-group-text">cm</span>
          </div>
            </div>
          </div>
          
          <div className="row my-1">
            <div className="col pt-2">
            <h5 className='ps-md-5'>Chest :</h5>
            </div>
            <div className='col'>
            <div className="input-group">
          <input type="text" className="form-control" value={`${BeSpokeData['Chest']}`}/>
         <span className="input-group-text">cm</span>
          </div>
            </div>
          </div>
          <div className="row">
            <div className="col pt-2">
            <h5 className='ps-md-5'>Arm Length :</h5>
            </div>
            <div className='col'>
            <div className="input-group">
          <input type="text" className="form-control" value={`${BeSpokeData['ArmLength']}`}/>
         <span className="input-group-text">cm</span>
          </div>
            </div>
          </div>
         </div>
      </div>
      <div className="row px-md-5 py-md-2  me-md-5">
      <div className="col-6 ">
      <h5 className='ps-md-5'>Price Range : </h5>
      </div>
         <div className='col-6 '>
          <div className='row'>
            <div className='col-5'>
            <div className="input-group">
  <input type="text" className="form-control" value={`${BeSpokeData['MinimumPrice']}`}/>
  <span className="input-group-text">$</span>
</div>
            </div>
          <div className='col-1'>  
<div className='mx-1'><hr className='Rangeline'/></div>
            </div>
            <div className='col-5'>
            <div className="input-group">
  <input type="text" className="form-control" value={`${BeSpokeData['MaximumPrice']}`}/>
  <span className="input-group-text">$</span>
</div>
            </div>
          </div>
         </div>
      </div>
      <div className='row mt-4 d-flex justify-content-evenly'>
 <button className=" NextButtonMultiStepForm1 col-3 p-1 button btn-navigate-form-step" type="button" step_number="6">Prev</button>
 
 <button className="button btn-navigate-form-step NextButtonMultiStepForm1 col-3  p-1" type="button" 
     data-bs-toggle="modal" data-bs-target="#exampleModal"
onClick={BespokeFormSubmit}
 >Submit</button>            
</div>
      </div>
        </form>
    </div>
</div>

    </div>   
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">BeSpoke</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={ChangeRoute}></button>
      </div>
      <div className="modal-body">
      {showmodal===1 &&
      <div>Your Request has been sent to the Admin.The Admin will review your request and mail you the response.

        In case of any further Queries you can contact us through our mail at &nbsp;
        <div className="LinksColor">metaverse@gmail.com</div>
      </div>
      }

      {showmodal===0 &&
            <div>Your Request has not been sent to the Admin due to some issues.You can submit the request again and
        if still same issue occur then contact us through our mail at &nbsp;
        <div className="LinksColor">metaverse@gmail.com</div>
      </div>}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={ChangeRoute}>Ok</button>
      </div>
    </div>
  </div>
</div>
    </div>
 

 
   </>
  )
}
