import React, { useEffect, useState } from 'react'
import "../../styles/Admin_Section/AdminPages/ProductRequests.css";
import axios from 'axios';
import ProductRequestInfo from './ProductRequestInfo';
import CheckFileDownload from './CheckFileDownload';


export default function ProductRequests() {
  const [productReqs, setProductReqs] = useState([]);
  const [adminResponse,setAdminResponse]=useState('');

  const getProductReqs = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/Bespoke');
      console.log('bespoke response', response);
      setProductReqs(response.data);

    } catch (error) {
      console.log('bespoke error', error);
    }
  }

  const sendEmail=async(prodReqId)=>{
    const responseObj={
      productRequestId:prodReqId,
      status:document.querySelector(`input[name="statusRadio${prodReqId}"]:checked`).value,
      responseMsg:document.getElementById(`messageBox${prodReqId}`).value,
    }
    console.log('response obj',responseObj);
    try {
      const response=await axios.post('http://localhost:8081/api/Bespoke/sendResponse',responseObj);
      console.log(response);
      let updatedProductRequest=[...productReqs.filter(pr=>pr._id!=prodReqId),response.data];
      setProductReqs(updatedProductRequest);
      

    } catch (error) {
      console.log(error);
    }

    
  }


  useEffect(() => {
    getProductReqs();
  }, []);


  return (
    <>
      <div className="container ProductRequestsContainer">
        <div className="row py-2">
          <h3 className="d-flex justify-content-center">Product Requests</h3>
        </div>
        <div className="row">
          <table class="table table-striped shadow-lg" style={{ backgroundColor: 'white', margin: '1rem', width: '95%', margin: 'auto' }}>
            <thead className='table-dark'>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Max. Price</th>
                <th scope="col">Status</th>
                <th scope="col">More</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productReqs.map((prodReq, index) => {
                return <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{prodReq.email}</td>
                    <td>{prodReq.gender}</td>
                    <td>{prodReq.MaximumPrice}</td>
                    <td>{prodReq.Status}</td>
                    <td><i class="fa-solid fa-eye" style={{ cursor: 'pointer' }} data-bs-toggle="modal" data-bs-target={`#viewInfoModal${index}`}></i></td>
                    <td> <button type="" className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#responseModal${index}`} >Reply</button> </td>
                  </tr>
                  <ProductRequestInfo prodReq={prodReq} index={index} />
                  {/* <div class="modal fade" id={`viewInfoModal${index}`} tabindex="-1" aria-labelledby="viewInfoModal" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                      <div class="modal-content" style={{backgroundColor:'#f1f1f1'}}>
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Product request</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div className='d-flex justify-content-between align-items-center' style={{flexWrap:'wrap'}}>
                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white',padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Arm Length</strong>
                              <p>{prodReq.ArmLength}</p>
                            </div>
                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Chest</strong>
                              <p>{prodReq.Chest}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Email</strong>
                              <p>{prodReq.Email}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Gender</strong>
                              <p>{prodReq.Gender}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Jacket Color</strong>
                              <p>{prodReq.JacketColor}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Description</strong>
                              <p>{prodReq.JacketDescription}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                
                              <strong>Material Type</strong>
                              <p>{prodReq.MaterialType}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                             
                              <strong>Maximum Price</strong>
                              <p>{prodReq.MaximumPrice}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                              
                              <strong>Minimum Price</strong>
                              <p>{prodReq.MinimumPrice}</p>
                            </div>


                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                              
                              <strong>Order Date</strong>
                              <p>{prodReq.OrderDate}</p>
                            </div>
                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                              
                              <strong>Preferred Size</strong>
                              <p>{prodReq.PrefferedSize}</p>
                            </div>
                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>
                              <strong>Status</strong>
                              <p>{prodReq.Status}</p>
                            </div>

                            <div className='shadow' style={{ width:'33%', marginTop:'1rem', backgroundColor:'white', padding: '0.5rem', borderBottom: '2px solid black',borderRadius:'5px' }}>                              
                              <strong>Waist</strong>
                              <p>{prodReq.Waist}</p>
                            </div>



                          </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  {/* response Modal */}
                  <div class="modal fade" id={`responseModal${index}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="responseModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="responseModal">Response</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div className='responseStatus d-flex justify-content-evenly align-items-center' style={{ width: '100%' }}>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name={`statusRadio${prodReq._id}`} id="acceptStatus" value="accept"  />
                                <label class="form-check-label" for="acceptStatus">
                                  Accept
                                </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" type="radio" name={`statusRadio${prodReq._id}`} id="rejectStatus" value="reject" />
                                <label class="form-check-label" for="rejectStatus">
                                  Reject
                                </label>
                            </div>
                          </div>
                          <label for="messageBox">Message</label>
                          <textarea className='form-control' rows="4" id={`messageBox${prodReq._id}`} style={{width:'100%'}} ></textarea>

                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onClick={()=>sendEmail(prodReq._id)}>Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              })}
            </tbody>
          </table>

        </div>
      </div>
    </>
  )
}
