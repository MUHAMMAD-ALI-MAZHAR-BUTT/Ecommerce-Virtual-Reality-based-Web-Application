import React from 'react'
import "../../styles/Admin_Section/AdminPages/ProductRequests.css"
export default function ProductRequests() {
  return (
    <>
    <div className="container ProductRequestsContainer">
      <div className="row py-2">
        <h3 className="d-flex justify-content-center">Product Requests</h3>
      </div>
      <div className="row">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th>
      <th scope="col">Max. Price</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>

  </tbody>
</table>
      </div>
    </div>
    </>
  )
}
