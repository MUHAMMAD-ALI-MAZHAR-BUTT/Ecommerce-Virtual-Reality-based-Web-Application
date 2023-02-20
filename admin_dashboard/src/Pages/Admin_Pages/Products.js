import { React, useState, useEffect } from 'react'
import "../../styles/Admin_Section/AdminPages/Products.css"
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'
import axios from 'axios';


export default function Products() {
  const [Gender, SetGender] = useState("Select Gender");
  const [extraSmallColorvalue, setExtraSmallColorvalue] = useState('');
  const [smallColorvalue, setSmallColorvalue] = useState('');
  const [mediumColorvalue, setMediumColorvalue] = useState('');
  const [largeColorvalue, setLargeColorvalue] = useState('');
  const [extraLargeColorvalue, setExtraLargeColorvalue] = useState('');
  const [TwoDImages, setTwoDImages] = useState([]);
  const [TableValues, setTableValues] = useState(
    ['ExtraSmall', 0, 0,]
  )
  const [TableChecks, setTableChecks] = useState({
    "option1": true,
    "option2": true,
    "option3": true,
    "option4": true,
    "option5": true,
  })
  function TableChecker() {
    document.getElementById("option1").addEventListener("click", () => { setTableChecks({ ...TableChecks, "option1": TableChecks['option1'] === true ? false : true }); });

    document.getElementById("option2").addEventListener("click", () => { setTableChecks({ ...TableChecks, "option2": TableChecks['option2'] === true ? false : true }); });

    document.getElementById("option3").addEventListener("click", () => { setTableChecks({ ...TableChecks, "option3": TableChecks['option3'] === true ? false : true }); });

    document.getElementById("option4").addEventListener("click", () => { setTableChecks({ ...TableChecks, "option4": TableChecks['option4'] === true ? false : true }); });

    document.getElementById("option5").addEventListener("click", () => { setTableChecks({ ...TableChecks, "option5": TableChecks['option5'] === true ? false : true }); });
  }
  // const handleOnchange = val => {
  //   setColorvalue(val)
  // }


  const options = [
    { label: 'Black', value: 'Black' },
    { label: 'Green', value: 'Green' },
    { label: 'Blue', value: 'Blue' },
    { label: 'White', value: 'White' },
    { label: 'Yellow', value: 'Yellow' },
    { label: 'Purple', value: 'Purple' },
    { label: 'Brown', value: 'Brown' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Silver', value: 'Silver' },
  ]
  const [Sizevalue, setSizevalue] = useState('')
  const handleOnchangeSizes = val => {
    setSizevalue(val)
  }
  const Sizeoptions = [
    { label: 'Extra Small', value: 'Extra Small' },
    { label: 'Small', value: 'Small' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Large', value: 'Large' },
    { label: 'Extra Large', value: 'Extra Large' },
    { label: '2XL', value: '2XL' }
  ]
  const [Seasonsvalue, setSeasonsvalue] = useState('')
  const handleOnSeasonInputchange = (val) => {
    console.log('season val', val);
    setSeasonsvalue(val);
    AddProduct();
  }
  const SeasonInputoptions = [
    { label: 'Autumn', value: 'Autumn' },
    { label: 'Summer', value: 'Summer' },
    { label: 'Winter', value: 'Winter' },
    { label: 'Fall', value: 'Fall' }
  ]
  var Two2Selectedimages = [];
  function Upload2DImages() {
    var Two_D_images = document.getElementById("Upload2DImages").files;
    for (let i = 0; i < Two_D_images.length; i++) {
      Two2Selectedimages.push({
        "name": Two_D_images[i].name,
        "url": URL.createObjectURL(Two_D_images[i]),
        "file": Two_D_images[i]
      });
    }
    // Now show images
    showImages();
  }
  var ThumbnailImagecontainer = [];
  function ThumbnailPic() {
    var ThumbnailPicImg = document.getElementById("ThumbnailButton").files;
    ThumbnailImagecontainer.push({
      "name": ThumbnailPicImg[0].name,
      "url": URL.createObjectURL(ThumbnailPicImg[0]),
      "file": ThumbnailPicImg[0]
    })
    console.log(ThumbnailImagecontainer)
    var Thumbnailimagespreview = "";
    ThumbnailImagecontainer.forEach((e, i) => {
      //   console.log(Two2Selectedimages.indexOf(e))
      Thumbnailimagespreview += ` <div className="image_container d-flex justify-content-center position-relative mx-1">
<img src=${e.url} alt="image"/>
<span className="position-absolute CloseButton" >&times;</span>
</div>`
    })
    document.getElementById("SelectedThumbnail2DImages").innerHTML = Thumbnailimagespreview;
  }
  function showImages() {
    var imagespreview = "";
    Two2Selectedimages.forEach((e, i) => {
      //   console.log(Two2Selectedimages.indexOf(e))
      imagespreview += ` <div className="image_container d-flex justify-content-center position-relative mx-1">
<img src=${e.url} alt="image"/>
<span className="position-absolute CloseButton" >&times;</span>
</div>`
    })
    document.getElementById("Selected2DImages").innerHTML = imagespreview;
  }
  function deleteImage(index) {
    console.log(index)
  }

  /** Variables */
  function AddProduct() {
    let ProductName = document.getElementById("ProductName").value;
    let ProductPrice = document.getElementById("ProductPrice").value;
    let ProductGender = document.getElementById("ProductGender").value;

    let ProductWeight = document.getElementById("ProductWeight").value;
    let ProductDescription = document.getElementById("ProductDescription").value;
    let ProductFabricType = document.getElementById("ProductFabricType").value;
    console.log(ProductName, ProductPrice, ProductGender, Seasonsvalue, ProductWeight, ProductFabricType, ProductDescription,
      Two2Selectedimages, ThumbnailImagecontainer
    )
  }

  async function addItem() {
    console.log("In add item function");
    let ProductName = document.getElementById("ProductName").value;
    let ProductPrice = document.getElementById("ProductPrice").value;
    let ProductGender = document.getElementById("ProductGender").value;

    let ProductWeight = document.getElementById("ProductWeight").value;
    let ProductDescription = document.getElementById("ProductDescription").value;
    let ProductFabricType = document.getElementById("ProductFabricType").value;


    console.log(ProductName, ProductPrice, ProductGender, Seasonsvalue, ProductWeight, ProductFabricType, ProductDescription,
      Two2Selectedimages, ThumbnailImagecontainer
    )
    console.log('smallColorvalue', smallColorvalue, 'extraSmallColorvalue', extraSmallColorvalue, 'mediumColorvalue', mediumColorvalue, 'largeColorvalue', largeColorvalue, 'extraLargeColorvalue', extraLargeColorvalue);
    // let options=['option1','option2','option3','option4','option5'];



    let allSizes = ['extraSmall', 'small', 'medium', 'large', 'extraLarge'];
    let sizesTable = {};
    let isChecked;
    let colorArray = [];
    let quantity;


    allSizes.map((size, index) => {
      //setting all sijes attributes

      // checked status 
      isChecked = document.getElementById(`option${index + 1}`).checked;

      //splittig string of colors to array
      if (index == 0) colorArray = isChecked ? extraSmallColorvalue.split(",") : [];
      if (index == 1) colorArray = isChecked ? smallColorvalue.split(",") : [];
      if (index == 2) colorArray = isChecked ? mediumColorvalue.split(",") : [];
      if (index == 3) colorArray = isChecked ? largeColorvalue.split(",") : [];
      if (index == 4) colorArray = isChecked ? extraLargeColorvalue.split(",") : [];

      // quantity of checked item
      quantity = isChecked ? Number(document.getElementById(`${size}Quantity`).value) : 0;

      // updatig sizesTable object with each size
      // if (isChecked){
      sizesTable[size] = {
        isChecked,
        colors: colorArray,
        quantity,
      }
      // }

    })
    console.log('sizesTable', sizesTable);

    const product = {
      name: ProductName,
      price: ProductPrice,
      gender: ProductGender,
      season: Seasonsvalue,
      weight: ProductWeight,
      fabricType: ProductFabricType,
      description: ProductDescription,
      sizesTable: sizesTable
    }

    const fileInput = document.getElementById('Upload2DImages');
    // console.log('fielInputs are:',fileInputs);
    const files = fileInput.files;
    console.log('files are :', files);
    
    const formData = new FormData();
    formData.append('name',ProductName);
    formData.append('price',ProductPrice);
    formData.append('gender',ProductGender);
    formData.append('season',Seasonsvalue);
    formData.append('weight',ProductWeight);
    formData.append('fabricType',ProductFabricType);
    formData.append('description',ProductDescription);
    formData.append('sizesTable',sizesTable);


    for (let i = 0; i < files.length; i++) {
      formData.append('product2DImages[]', files[i]);
    }
    console.log('form data is',formData);
    console.log('form data is',formData.get('name'));
    console.log('form data is',formData.get('product2DImages[]'));
    // saving product to db
    try {
      const url="http://localhost:8081/api/products";
      const response=await axios.post(url,formData);
      console.log(response);
    } catch (error) {
      console.log('error',error);
    }


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
              <button type="button" className="AddProductButton p-1 p-md-2 " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
              <div className='row px-md-5 '>
                <div className="row ">
                  <div className="mb-1 col">
                    <span className="form-label AddProductFormLabels">Name</span>
                    <input type="text" className="form-control" id="ProductName" name="OuterwearName" onChange={AddProduct} placeholder=''></input>
                  </div>
                  <div className='mb-1 col'>
                    <div className="row mt-1">
                      <div className="col">
                        <span className="form-label AddProductFormLabels ">Price</span>
                        <div className="input-group">
                          <input type="text" className="form-control" name="OuterwearPrice" onChange={AddProduct} placeholder="50"
                            id="ProductPrice"
                            aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                          <span className="input-group-text" id="basic-addon2">$</span>
                        </div>
                      </div>
                      <div className="dropdown col d-flex flex-column ">
                        <span className="form-label AddProductFormLabels  mb-0">Gender</span>
                        <select className="form-select" aria-label="Default select example" id="ProductGender" onChange={AddProduct} >
                          <option className="AddProductDropDownItems" value="Male">Male </option>
                          <option className="AddProductDropDownItems" value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-1'>
                  <div className="col">
                    <span className="form-label AddProductFormLabels  mb-0">Season</span>
                    <MultiSelect className="SeasonInput"
                      onChange={handleOnSeasonInputchange}
                      options={SeasonInputoptions}
                      placeholder="Select Seasons"
                      id='seasonMultiSelect'

                    />
                  </div>
                  <div className='col'>
                    <div className='row'>
                      <div className="col">
                        <span className="form-label AddProductFormLabels ">Weight</span>
                        <div className="input-group">
                          <input type="number" className="form-control" name="OuterwearWeight" onChange={AddProduct}
                            id="ProductWeight"
                            placeholder="50" aria-describedby="basic-addon2"></input>
                          <span className="input-group-text" id="basic-addon2"> lbs</span>
                        </div>
                      </div>
                      <div className="dropdown col d-flex flex-column ">
                        <span className="form-label AddProductFormLabels  mb-0">Fabric Type</span>
                        <select className="form-select" aria-label="Default select example" id="ProductFabricType" onChange={AddProduct} >
                          <option className="AddProductDropDownItems" value="Leather">Leather </option>
                          <option className="AddProductDropDownItems" value="Sports">Sports</option>
                          <option className="AddProductDropDownItems" value="Puffed">Puffed</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row mt-1'>
                  <div className="col mb-3">
                    <span className="form-label">Description</span>
                    <textarea className="form-control AddProductTextArea" onChange={AddProduct}
                      id="ProductDescription"
                    ></textarea>
                  </div>
                </div>
                <div className="row my-1 mt-md-3">
                  <div className='col table-responsive'>
                    <table className="table table-bordered ">
                      <thead>
                        <tr className='table-secondary'>
                          <th scope="col"></th>
                          <th scope="col">Sizes</th>
                          <th scope="col">Available</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Colors</th>
                        </tr>
                      </thead>
                      <tbody className="table-group-divider">
                        <tr>
                          <th scope="row">1</th>
                          <td><b>Extra Small</b></td>
                          <td>
                            <div className="form-check mt-sm-2 ">
                              <input className="form-check-input checkboxInput m-auto" type="checkbox" value=""
                                id="option1" onChange={TableChecker}
                              />
                            </div>
                          </td>
                          <td>
                            <input type="number" className="QuantityInput form-control option1" id='extraSmallQuantity' placeholder="20"
                              disabled={TableChecks['option1']}
                            />
                          </td>
                          <td>
                            <MultiSelect className="ColorInput option1"
                              onChange={(val) => setExtraSmallColorvalue(val)}
                              options={options}
                              id='Extra_small_option3'
                              placeholder="Select Color"
                              disabled={TableChecks['option1']}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td><b>Small</b></td>
                          <td>
                            <div className="form-check mt-sm-2 ">
                              <input className="form-check-input checkboxInput m-auto" type="checkbox" value="" id="option2"
                                onChange={TableChecker}
                              />
                            </div>
                          </td>
                          <td>
                            <input type="number" className="QuantityInput form-control option2" id='smallQuantity' placeholder="20"
                              disabled={TableChecks['option2']} />
                          </td>
                          <td>
                            <MultiSelect className="ColorInput option2"
                              onChange={(val) => setSmallColorvalue(val)}
                              options={options}
                              placeholder="Select Color"
                              disabled={TableChecks['option2']}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td><b>Medium</b></td>
                          <td>
                            <div className="form-check mt-sm-2 ">
                              <input className="form-check-input checkboxInput m-auto" id="option3" type="checkbox" value=""
                                onChange={TableChecker}
                              />
                            </div>
                          </td>
                          <td>
                            <input type="number" className="QuantityInput form-control option3" id='mediumQuantity' placeholder="20"
                              disabled={TableChecks['option3']}
                            />
                          </td>
                          <td>
                            <MultiSelect className="ColorInput option3"
                              onChange={(val) => setMediumColorvalue(val)}
                              options={options}
                              disabled={TableChecks['option3']}
                              placeholder="Select Color"
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td><b>Large</b></td>
                          <td>
                            <div className="form-check mt-sm-2 ">
                              <input className="form-check-input checkboxInput m-auto" id="option4" type="checkbox" value=""
                                onChange={TableChecker}
                              />
                            </div>
                          </td>
                          <td>
                            <input type="number" className="QuantityInput form-control option4" id='largeQuantity' placeholder="20"
                              disabled={TableChecks['option4']}
                            />
                          </td>
                          <td>
                            <MultiSelect className="ColorInput option4"
                              onChange={(val) => setLargeColorvalue(val)}
                              options={options}
                              placeholder="Select Color"
                              disabled={TableChecks['option4']}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td><b>Extra Large</b></td>
                          <td>
                            <div className="form-check mt-sm-2 ">
                              <input className="form-check-input checkboxInput m-auto" type="checkbox" id="option5" value=""
                                onChange={TableChecker}
                              />
                            </div>
                          </td>
                          <td>
                            <input type="number" className="QuantityInput form-control option5" id='extraLargeQuantity' placeholder="20"
                              disabled={TableChecks['option5']}
                            />
                          </td>
                          <td>
                            <MultiSelect className="ColorInput option5"
                              onChange={(val) => setExtraLargeColorvalue(val)}
                              options={options}
                              disabled={TableChecks['option5']}
                              placeholder="Select Color"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='row my-1'>
                  <div className='row'>
                    <h4 className='text-center'>Thumbnail Image</h4>
                  </div>
                  <div className='row'>
                    <div className="card px-0 my-0">
                      <div className='card-header '>
                        <div className='col '>
                          <h5>Image Uploading</h5>
                        </div>
                        <div className='col '>
                          <input type="file" id="ThumbnailButton" onChange={() => ThumbnailPic()} />
                          <button className="ThumbnailButton btn d-flex ms-auto"
                            onClick={() => document.getElementById("ThumbnailButton").click()}
                          >
                            Upload Image
                          </button>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className='container'>
                          <div className='row'>
                            <div className="card-body d-flex flex-wrap justify-content-start" id="SelectedThumbnail2DImages">


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row my-1'>
                  <div className='row'>
                    <h4 className='text-center'>2D Images</h4>
                  </div>
                  <div className='row my-1'>
                    <div className='card  px-0 mx-0'>
                      <div className='card-header'>
                        <div className="row">
                          <div className='col'>
                            <h5>Image Uploading</h5>

                          </div>
                          <div className='col'>
                            <input type="file" multiple name='product2DImages' id="Upload2DImages" className='ImageFileUpload'
                              onChange={Upload2DImages}
                            />
                            <button className='btn UploadImagesButton d-flex ms-auto' onClick={() =>
                              document.getElementById("Upload2DImages").click()}>Upload Images</button>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div className='container'>
                          <div className='row'>
                            <div className="card-body d-flex flex-wrap justify-content-start" id="Selected2DImages">


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary" onClick={addItem}>Add Item</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
