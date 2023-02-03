import {React,useState,useEffect} from 'react'
import "../../styles/Admin_Section/AdminPages/Products.css"
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'
export default function Products() {
  const [Gender,SetGender]=useState("Select Gender");
  const [Colorvalue, setColorvalue] = useState('');
  const [TwoDImages, setTwoDImages] = useState([]);
  const [TableChecks,setTableChecks]=useState({
    "option1":true,
    "option2":true,
    "option3":true,
    "option4":true,
    "option5":true,
  })

  function TableChecker(){
 document.getElementById("option1").addEventListener("click",()=>
 {setTableChecks({...TableChecks,"option1": TableChecks['option1']===false?true:false}) ;});
 
 document.getElementById("option2").addEventListener("click",()=>
 {setTableChecks({...TableChecks,"option2": TableChecks['option2']===false?true:false}) ;});
 
 document.getElementById("option3").addEventListener("click",()=>
 {setTableChecks({...TableChecks,"option3": TableChecks['option3']===false?true:false}) ;});
 
 document.getElementById("option4").addEventListener("click",()=>
 {setTableChecks({...TableChecks,"option4": TableChecks['option4']===false?true:false}) ;});
 
 document.getElementById("option5").addEventListener("click",()=>
 {setTableChecks({...TableChecks,"option5": TableChecks['option5']===false?true:false}) ;});
  }
  const  handleOnchange  =  val  => {
    setColorvalue(val)
  }
  const  options  = [
    { label:  'Black', value:  'Black'  },
    { label:  'Green', value:  'Green'  },
    { label:  'Blue', value:  'Blue'  },
    { label:  'White', value:  'White'  },
    { label:  'Yellow', value:  'Yellow'  },
    { label:  'Purple', value:  'Purple'  },
    { label:  'Brown', value:  'Brown'  },
    { label:  'Orange', value:  'Orange'  },
    { label:  'Silver', value:  'Silver'  },
  ]
  const [Sizevalue, setSizevalue] = useState('')
  const  handleOnchangeSizes  =  val  => {
    setSizevalue(val)
  }
  const  Sizeoptions  = [
    { label:  'Extra Small', value:  'Extra Small'  },
    { label:  'Small', value:  'Small'  },
    { label:  'Medium', value:  'Medium'  },
    { label:  'Large', value:  'Large'  },
    { label:  'Extra Large', value:  'Extra Large'  },
    { label:  '2XL', value:  '2XL'  }
  ]
  const [Seasonsvalue, setSeasonsvalue] = useState('')
  const  handleOnSeasonInputchange  =  val  => {
    setSeasonsvalue(val)
  }
  const  SeasonInputoptions  = [
    { label:  'Autumn', value:  'Autumn'  },
    { label:  'Summer', value:  'Summer'  },
    { label:  'Winter', value:  'Winter'  },
    { label:  'Fall', value:  'Fall'  }
  ]
  var Two2Selectedimages=[];
function Upload2DImages()
{
  var Two_D_images=document.getElementById("Upload2DImages").files;
  for(let i=0;i<Two_D_images.length;i++)
  {
    Two2Selectedimages.push({
      "name":Two_D_images[i].name,
      "url":URL.createObjectURL(Two_D_images[i]),
      "file":Two_D_images[i]
    });
  }
  // Now show images
  showImages();
}
function ThumbnailPic()
{
  var ThumbnailImagecontainer=[];
  var ThumbnailPicImg=document.getElementById("ThumbnailButton").files;
  ThumbnailImagecontainer.push({
    "name":ThumbnailPicImg[0].name,
    "url":URL.createObjectURL(ThumbnailPicImg[0]),
    "file":ThumbnailPicImg[0]
  })
  console.log(ThumbnailImagecontainer)
  var Thumbnailimagespreview="";
  ThumbnailImagecontainer.forEach((e,i)=>
{
//   console.log(Two2Selectedimages.indexOf(e))
Thumbnailimagespreview+= ` <div className="image_container d-flex justify-content-center position-relative mx-1">
<img src=${e.url} alt="image"/>
<span className="position-absolute CloseButton" >&times;</span>
</div>`
})
document.getElementById("SelectedThumbnail2DImages").innerHTML=Thumbnailimagespreview;
}
function showImages()
{
  var imagespreview="";
  Two2Selectedimages.forEach((e,i)=>
{
//   console.log(Two2Selectedimages.indexOf(e))
  imagespreview+= ` <div className="image_container d-flex justify-content-center position-relative mx-1">
<img src=${e.url} alt="image"/>
<span className="position-absolute CloseButton" >&times;</span>
</div>`
})
document.getElementById("Selected2DImages").innerHTML=imagespreview;
}
function deleteImage(index)
{
console.log(index)
}
  /** Variables */
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
        <div className='row px-md-5 '>
          <div className="row ">
          <div className="mb-1 col">
  <span className="form-label AddProductFormLabels">Name</span>
  <input type="text" className="form-control" name="OuterwearName" onChange={AddProduct} placeholder=''></input>
</div>
<div className='mb-1 col'>
  <div className="row mt-1">
  <div className="col">
<span className="form-label AddProductFormLabels ">Price</span>
<div className="input-group">
  <input type="text" className="form-control" name="OuterwearPrice" onChange={AddProduct} placeholder="50" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
  <span className="input-group-text" id="basic-addon2">$</span>
</div>
</div>
<div className="dropdown col d-flex flex-column ">
<span className="form-label AddProductFormLabels  mb-0">Gender</span>
  <select className="form-select" aria-label="Default select example">
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
      />
  </div>
<div className='col'>
  <div className='row'>
  <div className="col">
<span className="form-label AddProductFormLabels ">Weight</span>
<div className="input-group">
  <input type="number" className="form-control" name="OuterwearWeight"  placeholder="50"  aria-describedby="basic-addon2"></input>
  <span className="input-group-text" id="basic-addon2"> lbs</span>
</div>
</div>
  <div className="dropdown col d-flex flex-column ">
<span className="form-label AddProductFormLabels  mb-0">Fabric Type</span>
<select className="form-select" aria-label="Default select example">
  <option className="AddProductDropDownItems" value="Male">Leather </option>
  <option className="AddProductDropDownItems" value="Male">Sports</option>
  <option className="AddProductDropDownItems" value="Female">Puffed</option>
</select>
</div>
  </div>
</div>
</div>
          <div className='row mt-1'>
            <div className="col mb-3">
  <span className="form-label">Description</span>
  <textarea className="form-control AddProductTextArea"></textarea>
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
  <input type="number" className="QuantityInput form-control option1" placeholder="20"
  disabled={TableChecks['option1']}
  />
      </td>
      <td>
      <MultiSelect className="ColorInput option1"
        onChange={handleOnchange}
        options={options}
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
  <input type="number" className="QuantityInput form-control option2" placeholder="20"
  disabled={TableChecks['option2']} />
      </td>
      <td>
      <MultiSelect className="ColorInput option2"
        onChange={handleOnchange}
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
  <input type="number" className="QuantityInput form-control option3" placeholder="20"
  disabled={TableChecks['option3']}
  />
      </td>
      <td>
      <MultiSelect className="ColorInput option3"
        onChange={handleOnchange}
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
  <input type="number" className="QuantityInput form-control option4" placeholder="20"
  disabled={TableChecks['option4']}
  />
      </td>
      <td>
      <MultiSelect className="ColorInput option4"
        onChange={handleOnchange}
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
  <input type="number" className="QuantityInput form-control option5" placeholder="20"
  disabled={TableChecks['option5']}
  />
      </td>
      <td>
      <MultiSelect className="ColorInput option5"
        onChange={handleOnchange}
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
                    <input type="file" id="ThumbnailButton" onChange={()=>ThumbnailPic()}/>
                    <button className="ThumbnailButton btn d-flex ms-auto" 
                    onClick={()=>document.getElementById("ThumbnailButton").click()}
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
            <input type="file" multiple id="Upload2DImages" className='ImageFileUpload'
            onChange={Upload2DImages}
            />
            <button className='btn UploadImagesButton d-flex ms-auto' onClick={()=>
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
        <button type="button" className="btn btn-primary">Add Item</button>
      </div>
    </div>
  </div>
</div>
</>
    )
}
