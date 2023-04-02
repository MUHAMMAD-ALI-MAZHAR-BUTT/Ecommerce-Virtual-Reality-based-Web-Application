// import React, { useState, useEffect } from 'react';
// // import MaterialTable from 'material-table';
// import { IconButton } from '@mui/material';
// import { Edit as EditIcon } from '@material-ui/icons';
// import { Delete as DeleteIcon } from '@material-ui/icons';
// import axios from 'axios';
// import MaterialReactTable from 'material-react-table';


// function ProductTable() {
//     const [products, setProducts] = useState([]);

//     // useEffect(() => {
//     //     // fetch products from backend API
//     //     fetch('/api/products')
//     //         .then(response => response.json())
//     //         .then(data => setProducts(data));
//     // }, []);

//     async function getProducts() {
//         try {
//             const response = await axios.get('http://localhost:8081/api/products');
//             console.log('response', response);
//             setProducts(response.data);
//         } catch (error) {
//             console.log('error while fetching products', error);
//         }
//     }
//     useEffect(() => {
//         console.log('use effect is called');
//         getProducts();
//     }, []);


//     const columns = [
//         // { title: '#', field: 'index', render: rowData => rowData.tableData.id + 1 },
//         { title: 'Name', field: 'name' },
//         { title: 'Price', field: 'price' },
//         {
//             title: 'Actions',
//             render: rowData => (
//                 <>
//                     <IconButton onClick={() => handleEdit(rowData)}>
//                         <EditIcon />
//                     </IconButton>
//                     <IconButton onClick={() => handleDelete(rowData)}>
//                         <DeleteIcon />
//                     </IconButton>
//                 </>
//             ),
//         },
//     ];

//     const handleEdit = (rowData) => {
//         // handle edit logic here
//         console.log('Edit product:', rowData);
//     };

//     const handleDelete = (rowData) => {
//         // handle delete logic here
//         console.log('Delete product:', rowData);
//         const updatedProducts = [...products];
//         const index = rowData.tableData.id;
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);
//     };

//     return (
//         <MaterialReactTable
//             title="Product List"
//             columns={columns}
//             data={products}
//             options={{
//                 paging: false,
//                 search: false,
//                 sorting: true,
//                 draggable: false,
//                 rowStyle: {
//                     backgroundColor: '#FFF',
//                 },
//                 headerStyle: {
//                     backgroundColor: '#EEE',
//                 },
//             }}
//         />
//     );
// }

// export default ProductTable;