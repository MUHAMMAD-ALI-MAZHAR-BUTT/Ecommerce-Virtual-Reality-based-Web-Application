import {React,useState} from 'react'
import "../../styles/Admin_Section/AdminPages/Products.css"
export default function Products() {
  const [Gender,SetGender]=useState("Select Gender");

  function AddProduct()
  {

  }
  return (
<>
<div className="container ProductSection px-md-5 pt-md-3 pt-2">
<div className='row '>
<div className='d-flex bd-highlight '>
    <div className="bd-highlight ">
<h3>Products Sections</h3>
    </div>
    <div className="ms-auto bd-highlight pt-4">
      <button type="button" className="AddProductButton p-1 p-md-2 "data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      <i className="fa-solid fa-plus pe-md-2" ></i>
        Add Product</button>
    </div>
  </div>
</div>
</div>

{/* Add Product Section Modal */}

<div className="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 " id="staticBackdropLabel">Add Product</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
        <div className='row px-md-5'>
          <div className="row ">
          <div className="mb-1 col">
  <span className="form-label AddProductFormLabels">Name</span>
  <input type="text" className="form-control" name="OuterwearName" onChange={AddProduct} placeholder=''></input>
</div>
<div className="col">
<span className="form-label AddProductFormLabels ">Price</span>
<div class="input-group">
  <input type="text" class="form-control" name="OuterwearPrice" onChange={AddProduct} placeholder="50" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <span class="input-group-text" id="basic-addon2">$</span>
</div>
</div>
<div className="dropdown col d-flex flex-column ">
<span className="form-label AddProductFormLabels  mb-0">Gender</span>
  <select className="form-select" aria-label="Default select example">
  <option className="AddProductDropDownItems" value="Male">Male </option>
  <option className="AddProductDropDownItems" value="Female">Female</option>
</select>
</div>
<div className="dropdown col d-flex flex-column ">
<span className="form-label AddProductFormLabels  mb-0">Material Type</span>
<select className="form-select" aria-label="Default select example">
  <option className="AddProductDropDownItems" value="Male">Leather </option>
  <option className="AddProductDropDownItems" value="Male">Sports</option>
  <option className="AddProductDropDownItems" value="Female">Puffed</option>
</select>
</div>
          </div>
          <div className='row mt-1'>
            <div className="col mb-3">
  <span className="form-label">Description</span>
  <textarea className="form-control AddProductTextArea"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}
