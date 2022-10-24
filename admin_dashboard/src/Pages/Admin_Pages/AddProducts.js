import React from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import "../../styles/Admin_Section/AdminPages/AddProduct.css"
export default function AddProducts() {
  const [image1, set1stImage] = useState(null);
  const [image2, set2ndImage] = useState(null);
  const [image3, set3rdImage] = useState(null);
  const [image4, set4thImage] = useState(null);
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        const result = reader.result;
        if (event.target.id === "first") {
          set1stImage(result);
        }
        else if (event.target.id === "second") {
          set2ndImage(result);
        }
        else if (event.target.id === "third") {
          set3rdImage(result);
        }
        else if (event.target.id === "fourth") {
          set4thImage(result);
        }
      }
      reader.readAsDataURL(file);
    }

  }
  return (
    <>
      {/* <div className="container-fluid" style={{backgroundColor:'yellow'}}> */}
      <div className="container-fluid" >
        <div className='row mt-3'><h3 className=' d-flex justify-content-center HeadingOfPage'>Add Products</h3></div>
        <form>
          <div className="row mx-sm-5">
            <div className="col">
              <div class="mb-1">
                <label class="form-label fw-bold">Enter Product Name</label>
                <input type="text" class="form-control" id="ProductName" placeholder='Product Name' />
              </div>
              <div className=' d-flex justify-content-between '>
                <div className='mb-1 ProductType  w-50'>
                  <label class="form-label fw-bold">Product Type:</label>
                  <select class="form-select" aria-label="select example">
                    <option value="Black">Cloth</option>
                    <option value="Brown">Bags</option>
                    <option value="Blue">Glasses</option>
                  </select>
                </div>
                <div class="mb-1 Price ">
                  <label class="form-label fw-bold">Enter Price</label>
                  <input type="number" class="form-control" id="ProductPrice" max={80000} />
                </div>
              </div>

            </div>
            <div className="col"> <div class="mb-1">
              <label class="form-label fw-bold">Enter Product Description</label>
              <input type="text" class="form-control" id="" placeholder='Product Description' />
            </div>
              <div className='mb-1'>
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
          <div className='row mx-sm-5 '>
            <div className='col-2'>
              <b>2D Images</b>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col d-flex flex-column  p-0'>
                  <b className='text-center'>Small</b>
                  <div className='container-fluid p-0 ' style={{ width: '100%' }}>
                    <div className="rectangle " style={{ width: '250px', height: '200px', border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {image1 && <img src={image1} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />}
                      {!image1 && <><span class="bi bi-upload fa-5x blue-color"></span><p>No image to display</p></>}
                    </div>
                    <div className="buttonArea " style={{ display: 'flex' }}>
                      <input class="form-control" type="file" style={{ display: 'none' }} hidden id='imageUploader' onChange={handleChange} />
                      <button type="file" className=' UploadImageButton mx-auto' id="first" onClick={(event) => { event.preventDefault(); document.getElementById('imageUploader').click(); }}><span class="bi bi-upload blue-color"></span> upload</button>
                    </div>
                  </div>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>Medium</b>
                  <div className='container p-0 ' style={{ width: '100%' }}>
                    <div className="rectangle " style={{ width: '250px', height: '200px', border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {image2 && <img src={image2} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />}
                      {!image2 && <><span class="bi bi-upload fa-5x blue-color"></span><p>No image to display</p></>}
                    </div>
                    <div className="buttonArea " style={{ display: 'flex' }}>
                      <input class="form-control" type="file" style={{ display: 'none' }} hidden id='imageUploader' onChange={handleChange} />
                      <button type="file" className='btn UploadImageButton mx-auto' id="second" onClick={(event) => { event.preventDefault(); document.getElementById('imageUploader').click(); }}><span class="bi bi-upload blue-color"></span> upload</button>
                    </div>
                  </div>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>Large</b>
                  <div className='container p-0 ' style={{ width: '100%' }}>
                    <div className="rectangle " style={{ width: '250px', height: '200px', border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {image3 && <img src={image3} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />}
                      {!image3 && <><span class="bi bi-upload fa-5x blue-color"></span><p>No image to display</p></>}
                    </div>
                    <div className="buttonArea " style={{ display: 'flex' }}>
                      <input class="form-control" type="file" style={{ display: 'none' }} hidden id='imageUploader' onChange={handleChange} />
                      <button type="file" className='btn UploadImageButton mx-auto' id="third" onClick={(event) => { event.preventDefault(); document.getElementById('imageUploader').click(); }}><span class="bi bi-upload blue-color"></span> upload</button>
                    </div>
                  </div>
                </div>
                <div className='col  d-flex flex-column'>
                  <b className='text-center'>XL</b>
                  <div className='container' style={{ width: '100%' }}>
                    <div className="rectangle " style={{ width: '250px', height: '200px', border: '1px dashed grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      {image4 && <img src={image4} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />}
                      {!image4 && <><span class="bi bi-upload fa-5x blue-color"></span><p>No image to display</p></>}
                    </div>
                    <div className="buttonArea " style={{ display: 'flex' }}>
                      <input class="form-control" type="file" style={{ display: 'none' }} hidden id='imageUploader' onChange={handleChange} />
                      <button type="file" className='btn UploadImageButton mx-auto' id="fourth" onClick={(event) => { event.preventDefault(); document.getElementById('imageUploader').click(); }}><span class="bi bi-upload blue-color"></span> upload</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mx-sm-5  '>
            <div className='col-2'>
              3D Images
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col d-flex flex-column '>
                  <b className='text-center'>Small</b>

                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'> Medium</b>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>Large</b>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>XL</b>
                </div>
              </div>
            </div>
          </div>
          <div className='row mx-sm-5  '>
            <div className='col-2'>
              Avatars
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col d-flex flex-column '>
                  <b className='text-center'>Small</b>

                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>Medium</b>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>Large</b>
                </div>
                <div className='col d-flex flex-column'>
                  <b className='text-center'>XL</b>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-sm-5 a d-flex justify-content-between ps-sm-5 pe-sm-5">
            <button type="reset" className="btn  w-25 resetbutton">Cancel</button>
            <button type="submit" className="btn w-25  submitbutton">Add Product</button>
          </div>
        </form>
      </div>
    </>
  )
}
