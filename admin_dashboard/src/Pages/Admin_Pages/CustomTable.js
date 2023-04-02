import React, { useState, useEffect } from 'react';
import axios from 'axios';
import _ from 'lodash';
import EditProductModal from './EditProductModal';



export default function CustomTable() {

    const [products, setProducts] = useState([]);
    const [sorting, setSorting] = useState({
        name: 'desc',
        price: 'desc'
    })

    async function getProducts() {
        try {
            const response = await axios.get('http://localhost:8081/api/products');
            console.log('response', response);
            let sortedProducts = _.orderBy(response.data, ['name'], ['desc'])
            setProducts(sortedProducts);
        } catch (error) {
            console.log('error while fetching products', error);
        }
    }

    useEffect(() => {
        console.log('use effect is called');
        getProducts();
    }, []);


    // sorting table on basis of column 
    const sortTable = (column) => {
        // debugger;
        if (sorting[column] == 'desc') {
            // sorting[column]='asc';
            const updatedSorting = { ...sorting };
            updatedSorting[column] = 'asc';
            setSorting(updatedSorting);
            setProducts(_.orderBy(products, [column], ['asc']));
        }
        else {
            // sorting[column]='desc';
            const updatedSorting = { ...sorting };
            updatedSorting[column] = 'desc';
            setSorting(updatedSorting);
            setProducts(_.orderBy(products, [column], ['desc']));
        }

    }

    //deleting a row
    const deleteEntry = async (prodId) => {

        var deletedEntry = products.find(item => item._id == prodId);
        let updatedProducts = _.orderBy(products.filter(product => product._id != prodId), ['name'], ['desc']);
        setProducts(updatedProducts);
        try {
            const deleteProductResponse = await axios.delete(`http://localhost:8081/api/products/${prodId}`);
            console.log('deleteProductResponse', deleteProductResponse);
        } catch (error) {
            console.log('deleteProductResponse error', error);
            updatedProducts = _.orderBy([...updatedProducts, deletedEntry], ['name'], ['desc']);
            setProducts(updatedProducts);

        }
    }

    const updateProducts=(prod)=>{
        let updatedProducts=[...products.filter((product)=> product._id!=prod._id),prod];
        console.log('updated products',updatedProducts);
        setProducts(updatedProducts);

    }


    // modal things 
    function AddProduct() {
        console.log('add prodcut fucntion')
    }
    return (
        <>
            <table class="table table-striped" style={{ backgroundColor: 'white' }}>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product name {sorting.name == 'desc' ? <i class="fa-solid fa-caret-up" style={{ color: 'white', marginLeft: '0.5rem', cursor: 'pointer' }} onClick={() => sortTable('name')}></i> : <i class="fa-solid fa-caret-down" style={{ color: 'white', marginLeft: '0.5rem', cursor: 'pointer' }} onClick={() => sortTable('name')}></i>} </th>
                        <th scope="col">Price {sorting.price == 'desc' ? <i class="fa-solid fa-caret-up" style={{ color: 'white', marginLeft: '0.5rem', cursor: 'pointer' }} onClick={() => sortTable('price')}></i> : <i class="fa-solid fa-caret-down" style={{ color: 'white', marginLeft: '0.5rem', cursor: 'pointer' }} onClick={() => sortTable('price')}></i>}</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return <>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td key={index}> <i class="fa-solid fa-pencil" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${index}`} style={{ cursor: 'pointer' }}></i><i class="fa-solid fa-trash" style={{ color: 'red', marginLeft: '1rem', cursor: 'pointer' }} onClick={() => deleteEntry(product._id)}></i> </td>
                            </tr>
                            {product.length!=0 && <EditProductModal key={index} product={product} index={index} updateProducts={updateProducts} />}
                            {/* <div className="modal fade modal-xl" id={`staticBackdrop${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5 " id="staticBackdropLabel">Edit Product</h1>
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

                                
                                                <div className='row my-1'>
                                                    <div className='row'>
                                                        <h4 className='text-center'>3D Images</h4>
                                                    </div>
                                                    <div className='row my-1'>
                                                        <div className='card  px-0 mx-0'>
                                                            <div className='card-header'>
                                                                <div className="row">
                                                                    <div className='col'>
                                                                        <h5>3D Image Uploading</h5>

                                                                    </div>
                                                                    <div className='col'>
                                                                        <input type="file" multiple name='product3DImages' id="Upload3DImages" className='ImageFileUpload'
                                                                            onChange={Upload3DImages}
                                                                        />
                                                                        <button className='btn UploadImagesButton d-flex ms-auto' onClick={() =>
                                                                            document.getElementById("Upload3DImages").click()}>Upload Images</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='card-body'>
                                                                <div className='container'>
                                                                    <div className='row'>
                                                                        <div className="card-body d-flex flex-wrap justify-content-start" id="Selected3DImages">


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
                            </div> */}
                        </>
                    }

                    )}
                </tbody>
            </table>



        </>
    )
}
