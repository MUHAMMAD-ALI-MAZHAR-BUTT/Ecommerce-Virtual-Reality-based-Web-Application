import React from 'react'

export default function Delivered() {
    return (
        <div className="title delivered">
            <h3>Delivered</h3>

            {/* form for searching */}
            <div className="searchBox">
                <form action="">
                    <input type="text" placeholder='search' className='form-control' />
                </form>
            </div>

            {/* table for delivered orders hitory  */}
            <table class="table table-hover mt-4 shadow">
                <thead style={{ color: 'white', backgroundColor: 'rgb(0, 7, 61)' }}>
                    <tr>
                        <th scope="col">Sr.no.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Size</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacket</td>
                        <td>Medium</td>
                        <td>3</td>
                        <td>3000Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacket</td>
                        <td>Medium</td>
                        <td>3</td>
                        <td>3000Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacket</td>
                        <td>Medium</td>
                        <td>3</td>
                        <td>3000Rs</td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jacket</td>
                        <td>Medium</td>
                        <td>3</td>
                        <td>3000Rs</td>
                    </tr>

                </tbody>
            </table>


            {/* pagination Section  */}
            <div className="paginationArea mt-3">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
