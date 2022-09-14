import React from 'react';
import Modal from '../components/Modal';

export default function UserOrders() {
  return (
    <div className="title userOrders">
      <h3>Orders</h3>
      <table class="table table-hover mt-3 shadow">
        <thead style={{ color: 'white', backgroundColor: 'rgb(0, 7, 61)' }}>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Address</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Total Price</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Lahore</td>
            <td>7/7/2021</td>
            <td>40000Rs</td>
            <td>pending</td>
            <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil mx-3" data-bs-toggle="modal" data-bs-target="#editStatus" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
            </td>
            <Modal />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

