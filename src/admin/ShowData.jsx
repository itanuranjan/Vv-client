// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {  updateProfileFunction } from '../service/Apis'; // Import userData and updateProfileFunction API functions
// import './ShowData.css';

// const ShowData = () => {
//   const [data, setData] = useState([]);
//   const [editingItem, setEditingItem] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await userData();
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleEdit = (item) => {
//     console.log('Edit clicked for id:', item._id);
//     setEditingItem(item);
//   };

//   const handleUpdate = async () => {
//     try {
//       console.log('Update clicked for id:', editingItem._id);
//       const response = await updateProfileFunction(editingItem); // Call updateProfileFunction with editingItem data
//       console.log('Updated data:', response.data);
//       setEditingItem(null);
//       // Refetch data after update if needed
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   };

//   const handleRemove = async (id) => {
//     try {
//       console.log('Remove clicked for id:', id);
//       await axios.delete(`https://venturevibe-server.onrender.com/api/user/${id}`);
//       // Refetch data after delete if needed
//     } catch (error) {
//       console.error('Error removing data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditingItem({ ...editingItem, [name]: value });
//   };

//   const renderEditForm = () => {
//     return (
//       <tr>
//         <td>
//           <input type="text" name="fname" value={editingItem.fname} onChange={handleInputChange} />
//         </td>
//         <td>
//           <input type="text" name="email" value={editingItem.email} onChange={handleInputChange} />
//         </td>
//         <td>
//           <input type="password" name="password" value={editingItem.password} onChange={handleInputChange} />
//         </td>
//         <td colSpan="2">
//           <button onClick={handleUpdate}>Update</button>
//         </td>
//       </tr>
//     );
//   };

//   if (!Array.isArray(data)) {
//     return <div>No data available</div>;
//   }

//   return (
//     <div className='admin-container'>
//       <h1>Data Table</h1>
//       <table className='data-table'>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <React.Fragment key={index}>
//               {editingItem && editingItem._id === item._id ? (
//                 renderEditForm()
//               ) : (
//                 <tr>
//                   <td>{item.fname}</td>
//                   <td>{item.email}</td>
//                   <td>{item.password}</td>
//                   <td>
//                     <button onClick={() => handleEdit(item)}>Edit</button>
//                     <button onClick={() => handleRemove(item._id)}>Remove</button>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ShowData;
