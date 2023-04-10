import React from 'react'
import {useState,useEffect} from "react"
import "../CSS/Pages/FittingSizeSuggestion.css";
export default function FittingSizeSuggestion() {
  const [CustomerSizeInputs,setCustomerSizeInputs]=useState({
    "WaistAound":"",
    "ChestAround":"",
    "ArmLength":"",
    "Weight":"",
    "Height":"",
  });
  const [SizeSuggestion,setSizeSuggestion]=useState(0);
  function GetSizeSuggestion()
  {
    if(CustomerSizeInputs['Height'] >= 55 && CustomerSizeInputs['Height'] < 60 ||
    CustomerSizeInputs['WaistAound'] >= 25 && CustomerSizeInputs['WaistAound'] < 28 ||
    CustomerSizeInputs['ArmLength'] >= 26 && CustomerSizeInputs['ArmLength'] < 29 ||
    CustomerSizeInputs['ChestAround'] >= 26 &&   CustomerSizeInputs['ChestAround'] < 32)
    {
      setSizeSuggestion("Extra Small size");
    }
    
  // # Small Size
  if( CustomerSizeInputs['Height'] >= 60 && CustomerSizeInputs['Height'] < 65 ||
  CustomerSizeInputs['WaistAound'] >= 28 &&  CustomerSizeInputs['WaistAound'] < 31 ||
    CustomerSizeInputs['ArmLength'] >= 29 && CustomerSizeInputs['ArmLength']  < 31 ||
    CustomerSizeInputs['ChestAround']  >= 32 &&  CustomerSizeInputs['ChestAround']  < 35)
    {
      setSizeSuggestion("Small Size");
    }
  
  // # Medium Size
  if(CustomerSizeInputs['Height']>= 65 && CustomerSizeInputs['Height'] < 69 ||
  CustomerSizeInputs['WaistAound'] >= 31 && CustomerSizeInputs['WaistAound'] < 35 ||
  CustomerSizeInputs['ArmLength'] >= 31 && CustomerSizeInputs['ArmLength'] < 33.5 ||
    CustomerSizeInputs['ChestAround']  >= 35 &&  CustomerSizeInputs['ChestAround']  < 37)
    {
      setSizeSuggestion("Medium Size");
    }
    // # Large Size
    if(CustomerSizeInputs['Height']>= 69 && CustomerSizeInputs['Height'] < 72 ||
    CustomerSizeInputs['WaistAound'] >= 35 && CustomerSizeInputs['WaistAound'] < 38 ||
    CustomerSizeInputs['ArmLength'] >= 33.5 && CustomerSizeInputs['ArmLength'] < 35.5 ||
      CustomerSizeInputs['ChestAround']  >= 37 &&  CustomerSizeInputs['ChestAround']  < 40 )
      {
        setSizeSuggestion("Large Size");
      }
  
  // # X-Large Size
  if(CustomerSizeInputs['Height']>= 72 && CustomerSizeInputs['Height'] < 75 ||
  CustomerSizeInputs['WaistAound'] >= 38 && CustomerSizeInputs['WaistAound'] < 42 ||
  CustomerSizeInputs['ArmLength'] >= 33.5 && CustomerSizeInputs['ArmLength'] < 37 ||
    CustomerSizeInputs['ChestAround']  >= 40 &&  CustomerSizeInputs['ChestAround']  < 43)
    {
      setSizeSuggestion("Extra Large Size");
    }
  // # XX-Large Size
  if(CustomerSizeInputs['Height']>= 75 && CustomerSizeInputs['Height'] < 78 ||
  CustomerSizeInputs['WaistAound'] >= 42 && CustomerSizeInputs['WaistAound'] < 46 ||
  CustomerSizeInputs['ArmLength'] >= 37 && CustomerSizeInputs['ArmLength'] < 40 ||
    CustomerSizeInputs['ChestAround']  >= 43 &&  CustomerSizeInputs['ChestAround']  < 45)
    {
      setSizeSuggestion("XX-Large Size");
    }
    if(SizeSuggestion===0)
    {
      setSizeSuggestion("Invalid Inputs")
    }
  }

 
 function HandleSizSuggestion(e)
    {
      setCustomerSizeInputs({...CustomerSizeInputs,[e.target.name]:String(e.target.value)});
      console.log(CustomerSizeInputs);
    }
  return (
    <>
    <div className="container-fluid py-4 SizeSuggestion">
      <div className="row text-center">
        <h1>Get Your Best Fitting Size Suggestion</h1>
      </div>
      <div className="row m-sm-4  m-1">
      <ul className="nav nav-pills mb-3  justify-content-center" id="pills-tab" role="tablist">
  {/* <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">General</button>
  
  </li> */}
 
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">

      <div className="container-fluid">
        <div className="row ">
          <div className="col py-4">
        <div className="row px-md-5 py-1">
          <div className="col ps-md-5">
        <h4 className="pt-2 ps-md-2 ">Waist Around<span className="ps-md-1 mt-3" style={{'color':'red'}}>*</span>: </h4>
          </div>
          <div className="col">
          <div className="input-group">
  <input type="text" className="form-control waisteInput" 
  name="WaistAround" onChange={HandleSizSuggestion} required
  placeholder="30" >
  </input>
  <span className="input-group-text" id="basic-addon2">cm</span>
</div>
          </div>
        </div>
        <div className="row px-md-5 py-1">
          <div className="col ps-md-5">
        <h4 className="pt-2 ps-md-2">Arm length<span className="ps-md-1 mt-3" style={{'color':'red'}}>*</span> : </h4>
          </div>
          <div className="col">
          <div className="input-group  ">
  <input type="text" className="form-control waisteInput"
    name="ArmLength" onChange={HandleSizSuggestion} required
  placeholder="30" >
  </input>
  <span className="input-group-text" id="basic-addon2">cm</span>
</div>
          </div>
        </div>
        <div className="row px-md-5 py-1">
          <div className="col ps-md-5">
        <h4 className="pt-2 ps-md-2">Chest Around<span className="ps-md-1 mt-3" style={{'color':'red'}}>*</span>: </h4>
          </div>
          <div className="col">
          <div className="input-group">
  <input type="text" className="form-control waisteInput" 
    name="ChestAround" onChange={HandleSizSuggestion} required
  placeholder="34" >
  </input>
  <span className="input-group-text" id="basic-addon2">cm</span>
</div>
          </div>
        </div>
        <div className="row px-md-5 py-1">
          <div className="col ps-md-5">
        <h4 className="pt-2 ps-md-2">Weight :</h4>
          </div>
          <div className="col">
          <div className="input-group">
  <input type="text" className="form-control waisteInput" 
    name="Weight" onChange={HandleSizSuggestion}
  placeholder="5" >
  </input>
  <span className="input-group-text" id="basic-addon2">Kg</span>
</div>
          </div>
        </div>
        <div className="row px-md-5 py-1">
          <div className="col ps-md-5">
        <h4 className="pt-2 ps-md-2">Height<span className="ps-md-1 mt-3" style={{'color':'red'}}>*</span> : </h4>
          </div>
          <div className="col">
          <div className="input-group">
  <input type="text" className="form-control waisteInput" required
    name="Height" onChange={HandleSizSuggestion}
  placeholder="64" >
  </input>
  <span className="input-group-text" id="basic-addon2">ft</span>
</div>
          </div>
        </div>
        <div className="row mx-md-5 mt-5">
          <div className="col-5 offset-md-4">
          <button className="btn btn-primary py-2" data-bs-toggle="modal" data-bs-target="#exampleModal"
         onClick={GetSizeSuggestion}
          >
            Get Suggestion
            
          </button>
          </div>
        </div>
          </div>
          <div className="col">
        <img src="Images/Bespoke/4.jpg" className="SizeSuggestionImage" alt="Get best fitting size suggestion"/>
        </div>
        </div>
      </div>

    </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">...</div>
 </div>
      </div>
    </div>
   
{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 ps-md-5 ms-sm-5" id="exampleModalLabel">Best Fitting Size Suggestion</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
     <div className="container-fluid">
      <div className="row">
        <div className="col ">
      <h5> Body Measurements</h5> 
      <table className="table  table-bordered">
      <thead>
    <tr className='table-active'>
      <th scope="col">Name</th>
      <th scope="col">Values</th>
      </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">Waist Around</th>
      <td>{CustomerSizeInputs.WaistAround}cm</td>
      </tr>
      <tr>
    <th scope="row">Arm Length</th>
      <td>{CustomerSizeInputs.ArmLength}cm</td>
      </tr>
      <tr>
    <th scope="row">Chest Around </th>
      <td>{CustomerSizeInputs.ChestAround}cm</td>
      </tr>
      <tr>
    <th scope="row">Weight</th>
      <td>{CustomerSizeInputs.Weight}kg</td>
      </tr>
      <tr>
      <th scope="row">Size</th>
      <td>{SizeSuggestion}</td>
      </tr>
      </tbody>
</table>
      </div>
        <div className="col">
          <img src="Images/suggestion/girl.png" className="suggestion
          " alt="Suggestion"/>
        </div>
      </div>
     </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary"  data-bs-dismiss="modal">Ok</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
