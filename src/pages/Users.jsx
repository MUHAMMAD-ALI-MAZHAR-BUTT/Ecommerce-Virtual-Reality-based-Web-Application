import React from 'react'

export default function Users() {
  return (
    <div className="title Users">
      <h3>User Details</h3>
      <table class="table table-hover mt-3 shadow">
        <thead style={{color:'white',backgroundColor:'rgb(0, 7, 61)'}}>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Orders Pending</th>
            <th scope="col">Orders Completed</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Muhammad Ali</th>
            <td>muhammadAli123@gmail.com</td>
            <td>3</td>
            <td>1</td>
            <td>0301133112</td>
          </tr>
          <tr>
            <th scope="row">Muhammad Ali</th>
            <td>muhammadAli123@gmail.com</td>
            <td>3</td>
            <td>1</td>
            <td>0301133112</td>
          </tr>
          <tr>
            <th scope="row">Muhammad Ali</th>
            <td>muhammadAli123@gmail.com</td>
            <td>3</td>
            <td>1</td>
            <td>0301133112</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}




