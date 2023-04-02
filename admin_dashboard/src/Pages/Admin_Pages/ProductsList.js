// import React, { useEffect, useMemo, useState, useCallback } from 'react';
// import "../../styles/Admin_Section/AdminPages/productsList.css";
// import MaterialReactTable from 'material-react-table';
// import axios from 'axios';
// import { MenuItem } from '@material-ui/core';
// import { Box } from '@mui/system';
// import { IconButton } from '@mui/material';
// import { Edit as EditIcon } from '@material-ui/icons';
// import { Delete as DeleteIcon } from '@material-ui/icons';

// // import MaterialReactTable from 'material-react-table';


// export default function ProductsList() {
//     const [products, setProducts] = useState([]);
//     let tableEntries=[];
//     const columns = useMemo(
//         () => [
//             {
//                 header: 'Name',
//                 accessorKey: 'name', //simple accessorKey pointing to flat data
//             },
//             {
//                 header: 'Price',
//                 accessorKey: 'price', //simple accessorKey pointing to flat data
//             },
//         ],
//         [],
//     );



//     const deleteProduct = (rowData) => {

//         console.log('row',rowData);
//         console.log('products', products);
//         console.log('Delete product:', rowData);
//         const updatedProducts = [...products];
//         const index = rowData.tableData.id;
//         updatedProducts.splice(index, 1);
//         setProducts(updatedProducts);

//     };

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

//     return (
//         <MaterialReactTable
//             title="Products"
//             columns={columns}
//             data={products}
//             enableRowActions
//             enableRowNumbers
//             initialState={{ pagination: { pageSize: 5 } }}
//             positionActionsColumn="last"
//             renderRowActions={({ row }) => (
//                 <Box>
//                     <IconButton onClick={() => { console.info('Edit') }}>
//                         <EditIcon />
//                     </IconButton>
//                     <IconButton >
//                         <DeleteIcon style={{ color: '#dc3545' }} onClick={() => deleteProduct(row)} />
//                     </IconButton>
//                 </Box>
//             )}
//         />
//     )
// }
