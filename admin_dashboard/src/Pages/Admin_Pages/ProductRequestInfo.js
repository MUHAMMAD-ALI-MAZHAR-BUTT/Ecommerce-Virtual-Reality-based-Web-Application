import React from 'react'

export default function ProductRequestInfo({prodReq,index}) {
    return (
        <div class="modal fade" id={`viewInfoModal${index}`} tabindex="-1" aria-labelledby="viewInfoModal" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content" style={{ backgroundColor: '#f1f1f1' }}>
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Product request</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className='d-flex justify-content-between align-items-center' style={{ flexWrap: 'wrap' }}>
                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Arm Length</strong>
                                <p>{prodReq.ArmLength}</p>
                            </div>
                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Chest</strong>
                                <p>{prodReq.Chest}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Email</strong>
                                <p>{prodReq.Email}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Gender</strong>
                                <p>{prodReq.Gender}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Jacket Color</strong>
                                <p>{prodReq.JacketColor}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Description</strong>
                                <p>{prodReq.JacketDescription}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Material Type</strong>
                                <p>{prodReq.MaterialType}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Maximum Price</strong>
                                <p>{prodReq.MaximumPrice}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Minimum Price</strong>
                                <p>{prodReq.MinimumPrice}</p>
                            </div>


                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Order Date</strong>
                                <p>{prodReq.OrderDate}</p>
                            </div>
                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Preferred Size</strong>
                                <p>{prodReq.PrefferedSize}</p>
                            </div>
                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Status</strong>
                                <p>{prodReq.Status}</p>
                            </div>

                            <div className='shadow' style={{ width: '33%', marginTop: '1rem', backgroundColor: 'white', padding: '0.5rem', borderBottom: '2px solid black', borderRadius: '5px' }}>
                                <strong>Waist</strong>
                                <p>{prodReq.Waist}</p>
                            </div>



                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
