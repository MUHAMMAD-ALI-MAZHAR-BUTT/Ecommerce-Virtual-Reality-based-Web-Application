import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MultiSelect from 'react-multiple-select-dropdown-lite'
import 'react-multiple-select-dropdown-lite/dist/index.css'

export default function EditProductModal({ product, index ,updateProducts}) {
    // season field options 
    const SeasonInputoptions = [
        { label: 'Autumn', value: 'Autumn' },
        { label: 'Summer', value: 'Summer' },
        { label: 'Winter', value: 'Winter' },
        { label: 'Fall', value: 'Fall' }
    ]

    // color options 
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


    // states 
    const [productName, setProductName] = useState(product.name);
    const [productPrice, setPrice] = useState(product.price);
    const [gender, setGender] = useState(product.gender);
    const [productSeason, setSeason] = useState(product.season);
    const [productWeight, setWeight] = useState(product.weight);
    const [productFabric, setFabricType] = useState(product.fabricType);
    const [productDescription, setDescription] = useState(product.description);
    const [sizesTable, updateSizesTable] = useState(product.sizesTable);
    const [productThumbnailImgDB, setThumbnailImgDB] = useState(product.thumbnailImg);
    const [thumbnailImgFE, setThumbnailImgFE] = useState({});
    const [twoDImagesDB, setTwoDImagesDB] = useState(product.productTwoDImages);
    const [twoDImagesFE, setTwoDImagesFE] = useState([]);
    const [threeDImagesDB, setThreeDImagesDB] = useState(product.product3DImages);
    const [threeDImagesFE, setThreeDImagesFE] = useState([]);



    // useEffect 
    useEffect(() => {
        // console.log('productSeason in use Effect', productSeason);
        // console.log('in use effect sizesTable', sizesTable)
        console.log('in use Effect product,',product);
    })



    // handlers 
    const handleProductName = (e) => {
        setProductName(e.target.value);
    }
    const handleProductPrice = (e) => {
        setPrice(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleSeason = (val) => {
        console.log('onchage val=', val);
        setSeason(val);
    }
    const handleProductWeight = e => {
        setWeight(e.target.value);
    }
    const handleFabricType = e => {
        setFabricType(e.target.value);
    }
    const handleDescription = e => {
        setDescription(e.target.value);
    }
    const handleSizesTableUpdation = (size, prop, value) => {
        const updatedSizesTable = { ...sizesTable };
        if (prop == 'isChecked' && value == false) {
            updatedSizesTable[size][prop] = value;
            updatedSizesTable[size]['colors'] = [];
        }
        else
            updatedSizesTable[size][prop] = value;
        updateSizesTable(updatedSizesTable);
    }


    function ThumbnailPic() {
        var ThumbnailPicImg = document.getElementById("ThumbnailButton").files;
        setThumbnailImgFE({
            "name": ThumbnailPicImg[0].name,
            "url": URL.createObjectURL(ThumbnailPicImg[0]),
            "file": ThumbnailPicImg[0]
        });
        setThumbnailImgDB('');
    }
    function Upload2DImages() {
        let Two2Selectedimages = [];
        var Two_D_images = document.getElementById("Upload2DImages").files;
        for (let i = 0; i < Two_D_images.length; i++) {
            Two2Selectedimages.push({
                "name": Two_D_images[i].name,
                "url": URL.createObjectURL(Two_D_images[i]),
                "file": Two_D_images[i]
            });
        }
        setTwoDImagesFE(Two2Selectedimages);
    }

    const deleteImg = (img) => {
        // debugger;
        let DBImages = twoDImagesDB.filter(dbImg => dbImg != img);

        setTwoDImagesDB(DBImages);
    }





    // product updation 
    const updateItem = async () => {
        // function to update item 
        console.log('2D imeages preiew',twoDImagesDB)
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('price', productPrice);
        formData.append('gender', gender);
        formData.append('season', productSeason);
        formData.append('weight', productWeight);
        formData.append('fabricType', productFabric);
        formData.append('description', productDescription);
        formData.append('sizesTable', JSON.stringify(sizesTable));
        formData.append('thumbnailImg', productThumbnailImgDB);
        formData.append('productTwoDImages', JSON.stringify(twoDImagesDB));
        formData.append('product3DImages', JSON.stringify(threeDImagesDB));


        if (Object.keys(thumbnailImgFE).length != 0)
            formData.append('newThumbnailImg', thumbnailImgFE.file);
        if (twoDImagesFE.length != 0)
            for (let i = 0; i < twoDImagesFE.length; ++i) {
                formData.append('newTwoDImages[]', twoDImagesFE[i].file);
            }
        if (threeDImagesFE.length != 0)
            for (let i = 0; i < threeDImagesFE.length; ++i) {
                formData.append('newThreeDModels[]', threeDImagesFE[i].file);
            }

        // for (const [key, value] of formData) {
        //     console.log(key, value);
        // }


        // making api request for product upation 
        try {
            const response=await axios.put(`http://localhost:8081/api/products/${product._id}`,formData);
            console.log('update product response',response);
            updateProducts(response.data);

        } catch (error) {
            console.log('updated product error',error);

        }

    }

    return (
        <div className="modal fade modal-xl" id={`staticBackdrop${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                    <input type="text" className="form-control" id="ProductName" name="OuterwearName" value={productName} onChange={handleProductName} placeholder=''></input>
                                </div>
                                <div className='mb-1 col'>
                                    <div className="row mt-1">
                                        <div className="col">
                                            <span className="form-label AddProductFormLabels ">Price</span>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="OuterwearPrice" onChange={handleProductPrice} value={productPrice} placeholder="50"
                                                    id="ProductPrice"
                                                    aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                                                <span className="input-group-text" id="basic-addon2">$</span>
                                            </div>
                                        </div>
                                        <div className="dropdown col d-flex flex-column ">
                                            <span className="form-label AddProductFormLabels  mb-0">Gender</span>
                                            <select className="form-select" aria-label="Default select example" id="ProductGender" value={gender} onChange={handleGender} >
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
                                        onChange={handleSeason}
                                        options={SeasonInputoptions}
                                        value={productSeason}
                                        placeholder="Select Seasons"
                                        id='seasonMultiSelect'
                                        defaultValue={productSeason.split(',')}

                                    />
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <div className="col">
                                            <span className="form-label AddProductFormLabels ">Weight</span>
                                            <div className="input-group">
                                                <input type="number" className="form-control" name="OuterwearWeight" value={productWeight} onChange={handleProductWeight}
                                                    id="ProductWeight"
                                                    placeholder="50" aria-describedby="basic-addon2"></input>
                                                <span className="input-group-text" id="basic-addon2"> lbs</span>
                                            </div>
                                        </div>
                                        <div className="dropdown col d-flex flex-column ">
                                            <span className="form-label AddProductFormLabels  mb-0">Fabric Type</span>
                                            <select className="form-select" aria-label="Default select example" id="ProductFabricType" value={productFabric} onChange={handleFabricType} >
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
                                    <textarea className="form-control AddProductTextArea" value={productDescription} onChange={handleDescription}
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
                                                        <input className="form-check-input checkboxInput m-auto" type="checkbox" checked={sizesTable["extraSmall"].isChecked} value={sizesTable["extraSmall"].isChecked}
                                                            id="option1" onChange={(e) => handleSizesTableUpdation('extraSmall', 'isChecked', e.target.checked)}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="number" className="QuantityInput form-control option1" id='extraSmallQuantity' value={sizesTable.extraSmall.quantity} onChange={(e) => handleSizesTableUpdation('extraSmall', 'quantity', Number(e.target.value))} placeholder="20"
                                                        disabled={!sizesTable.extraSmall.isChecked}
                                                    />
                                                </td>
                                                <td>
                                                    <MultiSelect className="ColorInput option1"
                                                        onChange={(val) => handleSizesTableUpdation('extraSmall', 'colors', val.split(','))}
                                                        options={options}
                                                        value={sizesTable.extraSmall.colors}
                                                        id='Extra_small_option3'
                                                        placeholder="Select Color"
                                                        disabled={!sizesTable.extraSmall.isChecked}
                                                        defaultValue={sizesTable.extraSmall.colors}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td><b>Small</b></td>
                                                <td>
                                                    <div className="form-check mt-sm-2 ">
                                                        <input className="form-check-input checkboxInput m-auto" type="checkbox" id="option2" onChange={(e) => handleSizesTableUpdation('small', 'isChecked', e.target.checked)}
                                                            value={sizesTable.small.isChecked} checked={sizesTable.small.isChecked}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="number" className="QuantityInput form-control option2" id='smallQuantity' placeholder="20" onChange={(e) => handleSizesTableUpdation('small', 'quantity', Number(e.target.value))}
                                                        disabled={!sizesTable.small.isChecked} value={sizesTable.small.quantity} />
                                                </td>
                                                <td>
                                                    <MultiSelect className="ColorInput option2"
                                                        onChange={(val) => handleSizesTableUpdation('small', 'colors', val.split(','))}
                                                        options={options}
                                                        value={sizesTable.small.colors}
                                                        disabled={!sizesTable.small.isChecked}
                                                        placeholder="Select Color"
                                                        defaultValue={sizesTable.small.colors}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td><b>Medium</b></td>
                                                <td>
                                                    <div className="form-check mt-sm-2 ">
                                                        <input className="form-check-input checkboxInput m-auto" id="option3" type="checkbox" checked={sizesTable.medium.isChecked} value={sizesTable.medium.isChecked}
                                                            onChange={(e) => handleSizesTableUpdation('medium', 'isChecked', e.target.checked)}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="number" className="QuantityInput form-control option3" id='mediumQuantity' placeholder="20"
                                                        onChange={(e) => handleSizesTableUpdation('medium', 'quantity', Number(e.target.value))}
                                                        disabled={!sizesTable.medium.isChecked} value={sizesTable.medium.quantity}
                                                    />
                                                </td>
                                                <td>
                                                    <MultiSelect className="ColorInput option3"
                                                        onChange={(val) => handleSizesTableUpdation('medium', 'colors', val.split(','))}
                                                        options={options}
                                                        value={sizesTable.medium.colors}
                                                        disabled={!sizesTable.medium.isChecked}
                                                        placeholder="Select Color"
                                                        defaultValue={sizesTable.medium.colors}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td><b>Large</b></td>
                                                <td>
                                                    <div className="form-check mt-sm-2 ">
                                                        <input className="form-check-input checkboxInput m-auto" id="option4" type="checkbox" onChange={(e) => handleSizesTableUpdation('large', 'isChecked', e.target.checked)}
                                                            value={sizesTable.large.isChecked} checked={sizesTable.large.isChecked}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="number" className="QuantityInput form-control option4" id='largeQuantity' placeholder="20"
                                                        onChange={(e) => handleSizesTableUpdation('large', 'quantity', Number(e.target.value))}
                                                        disabled={!sizesTable.large.isChecked} value={sizesTable.large.quantity}
                                                    />
                                                </td>
                                                <td>
                                                    <MultiSelect className="ColorInput option4"
                                                        onChange={(val) => handleSizesTableUpdation('large', 'colors', val.split(','))}
                                                        options={options}
                                                        value={sizesTable.large.colors}
                                                        disabled={!sizesTable.large.isChecked}
                                                        placeholder="Select Color"
                                                        defaultValue={sizesTable.large.colors}
                                                    />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td><b>Extra Large</b></td>
                                                <td>
                                                    <div className="form-check mt-sm-2 ">
                                                        <input className="form-check-input checkboxInput m-auto" type="checkbox" id="option5" onChange={(e) => handleSizesTableUpdation('extraLarge', 'isChecked', e.target.checked)}
                                                            value={sizesTable.extraLarge.isChecked} checked={sizesTable.extraLarge.isChecked}
                                                        />
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="number" className="QuantityInput form-control option5" id='extraLargeQuantity' placeholder="20"
                                                        onChange={(e) => handleSizesTableUpdation('extraLarge', 'quantity', Number(e.target.value))}
                                                        disabled={!sizesTable.extraLarge.isChecked} value={sizesTable.extraLarge.quantity}
                                                    />
                                                </td>
                                                <td>
                                                    <MultiSelect className="ColorInput option5"
                                                        onChange={(val) => handleSizesTableUpdation('extraLarge', 'colors', val.split(','))}
                                                        options={options}
                                                        value={sizesTable.extraLarge.colors}
                                                        defaultValue={sizesTable.extraLarge.colors}
                                                        disabled={!sizesTable.extraLarge.isChecked}
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
                                                        <div style={{ width: '200px', height: '200px', overflow: 'hidden', border: '8px solid #a5b1bc', borderRadius: '5px' }}>
                                                            <img src={productThumbnailImgDB == '' ? thumbnailImgFE.url : `http://localhost:8081/uploads/${productThumbnailImgDB}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>
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

                                                        {/* rendering DB images */}
                                                        {twoDImagesDB.length != 0 && twoDImagesDB.map((DBImg, index) => <div key={index} style={{ width: '200px', height: '200px', overflow: 'hidden', marginRight: '1rem', border: '8px solid #a5b1bc', borderRadius: '5px', position: 'relative' }}>
                                                            <i class="fa-solid fa-trash" style={{ color: '#ff3737', position: 'absolute', right: '5px', top: '5px', cursor: 'pointer' }} onClick={() => deleteImg(DBImg)}></i>
                                                            <img src={`http://localhost:8081/uploads/${DBImg}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>)}

                                                        {/* rendering FE Images  */}
                                                        {twoDImagesFE.length != 0 && twoDImagesFE.map((FEImg, index) => <div key={twoDImagesDB.length + index} style={{ width: '200px', height: '200px', overflow: 'hidden', marginRight: '1rem', border: '8px solid #a5b1bc', borderRadius: '5px' }}>
                                                            <img src={FEImg.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                        </div>)}
                                                        <i class="fa-solid fa-trash-xmark" style={{ color: 'red' }}></i>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3D image upload section  */}
                            {/* <div className='row my-1'>
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
                            </div> */}

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={updateItem}>Edit Item</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
