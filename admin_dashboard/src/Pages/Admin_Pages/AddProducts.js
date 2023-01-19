import {React,useState} from 'react'
import "../../styles/Admin_Section/AdminPages/AddProduct.css"
import "../../App.css"
export default function AddProducts() {
  const [Gender,SetGender]=useState("Select Gender");
  function Set_Gender(Argument){
    if(Argument==="Male"){
      SetGender("For Male")
    }else{
      SetGender("For Female");
    }
  }
  return (
    <>
      <div className="container-fluid " >
        <div className='row my-3'><h1 className=' text-center HeadingOfPage'>Add Products</h1></div>
    <div className='row'>
    <form>
 <div className='container-fluid px-md-5'>
<div className='row px-md-5'>
<div className="col-sm-3 mb-3">
<label className="form-label fw-bold">Product Name</label>
  <input type="text" class="form-control" id="ProductName" placeholder="Enter Product Name"/>
</div>
<div className="col-sm-3 mb-3">
<label className="form-label fw-bold">Product Price</label>
  <input type="number" class="form-control" id="ProductPrice" placeholder="20$"/>
</div>
<div className="col-sm-3 mb-3">
<label className="form-label fw-bold">Material Type</label>
  <input type="text" class="form-control" placeholder="Leather"/>
</div>
<div className="col-sm-3 mb-3">

</div>
</div>
<div className='row px-md-5'>
<div class="mb-3 w-100">
<label className="form-label fw-bold">Product Description</label>
  <textarea  id="Description_Field" className='w-100 DescriptionField' rows="5" cols="5"></textarea>
</div>
</div>
<div className="row px-md-5">
<h6 className='fw-bold'>Available Pieces</h6>
</div>
<div className='row px-md-5'>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Small</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control"  placeholder="20"/>
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Medium</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control" placeholder="20"/>
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Large</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control" placeholder="20"/>
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">XL</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control"  placeholder="20"/>
</div>
</div>
</div>
<div className="row px-md-5">
<h6 className='fw-bold'>Available Colors</h6>
</div>
<div className='row px-md-5'>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Small</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control"  placeholder="20"/>
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Medium</label>
  </div>
<div className="mb-3">
  
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">Large</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control" placeholder="20"/>
</div>
</div>
<div className="w-25">
  <div className=''>
  <label className="form-label fw-bold">XL</label>
  </div>
<div className="mb-3">
  <input type="number" class="form-control"  placeholder="20"/>
</div>
</div>
</div>
 </div>


 {/* End  */}
 <div className='row d-flex justify-content-around my-5'>
            <button type="reset" className="btn  w-25 resetbutton">Cancel</button>
            <button type="submit" className="btn w-25  submitbutton">Add Product</button>
 </div>
 </form>

    </div>
         {/* <div className='mb-1'>
                <label class="form-label fw-bold">Available Colors:</label>
                <select class="form-select" aria-label="multiple select example">
                  <option value="Black">Black</option>
                  <option value="Brown">Brown</option>
                  <option value="Blue">Blue</option>
                  <option value="Red">Red</option>
                  <option value="Grey">Grey</option>
                  <option value="Orange">Orange</option>
                  <option value="Green">Green</option>
                  <option value="White">White</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Orange">Orange</option>
                  <option value="Magenta">Magenta</option>
                  <option value="Purple">Purple</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row mx-sm-5 '>
            <div className='col-2'>
              <b>Pieces</b>
            </div>
            <div className='col'>
              <div className='row '>
                <div className='col d-flex flex-column'>
                  <b className=' ps-sm-3'>Small</b>
                  <div class="mb-1 ">
                    <input type="number" class="form-control" max={80000} />
                  </div>
                </div>
                <div className='col d-flex flex-column'>
                  <b className=' ps-sm-3'>Medium</b>
                  <div class="mb-1 ">
                    <input type="number" class="form-control" max={80000} />
                  </div>
                </div>
                <div className='col d-flex flex-column'>
                  <b className=' ps-sm-3'> Large</b>
                  <div class="mb-1 ">

                    <input type="number" class="form-control" max={80000} />
                  </div>
                </div>
                <div className='col d-flex flex-column'>
                  <b className=' ps-sm-3'> XL</b>
                  <div class="mb-1  ">
                    <input type="number" class="form-control" max={80000} />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="row mx-sm-5 a d-flex justify-content-between ps-sm-5 pe-sm-5">
            <button type="reset" className="btn  w-25 resetbutton">Cancel</button>
            <button type="submit" className="btn w-25  submitbutton">Add Product</button>
          </div>
        </form> */}
      </div>
    </>
  )
}
