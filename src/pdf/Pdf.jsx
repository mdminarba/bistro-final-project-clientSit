// import React from 'react';

// class DownloadPDFButton extends React.Component {
//     handleDownload = async () => {
//         try {
//             const response = await fetch('http://localhost:5005/menu/download');
//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.href = url;
//             a.download = 'menu.pdf';
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     render() {
//         return (
//             <button onClick={this.handleDownload}>Download Menu PDF</button>
//         );
//     }
// }

// export default DownloadPDFButton;
// // import React, { useState } from 'react';

// // function App() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     // Add more fields as needed
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       // Send form data to server
// //       const response = await fetch('http://localhost:5005/menu/download', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>User Form</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
// //         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
// //         {/* Add more fields as needed */}
// //         <button type="submit">Download PDF</button>
// //       </form>
// //     </div>
// //   );
// // }

// // // export default App;
// import { useState } from 'react';

// import { saveAs } from 'file-saver';
// import useAxiosSecure from '../Hooks/useAxiosSecure';

// const Menu = () => {
//   const [menuItemNumber, setMenuItemNumber] = useState('');
//   const [menuResult, setMenuResult] = useState(null);
//   const axiosSecure = useAxiosSecure();

//   const handleSearch = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axiosSecure.get(`/menu/${menuItemNumber}`);
//       setMenuResult(response.data);

//       // Generate PDF
//       generatePDF(response.data);
//     } catch (error) {
//       console.error('Error:', error);
//       setMenuResult({ error: 'An unexpected error occurred.' });
//     }
//   };

//   const generatePDF = (menuData) => {
//     // Create PDF content using menuData
//     const pdfContent = `
//       Menu Name: ${menuData.name}
//       Menu Number: ${menuData.number}
//       // Add more menu details as needed
//     `;

//     // Convert PDF content to Blob
//     const pdfBlob = new Blob([pdfContent], { type: 'application/pdf' });

//     // Save PDF Blob as a file
//     saveAs(pdfBlob, 'menu.pdf');
//   };

//   return (
//     <div>
//       <form className='text-right mr-1 -mt-7 ' onSubmit={handleSearch}>
//         <input
//           type="text"
//           className='border-2 text-black font-semibold border-red-300 px-1 w-32 rounded-md'
//           id="menuItemNumber"
//           value={menuItemNumber}
//           onChange={(e) => setMenuItemNumber(e.target.value)}
//           required
//         />
//         <button className='border-2 border-red-300 px-1 rounded-md ' type="submit">Search</button>
//       </form>

//       {menuResult && (
//         <div className='bg-zinc-50'>
//           {menuResult.error ? (
//             <p>Error: {menuResult.error}</p>
//           ) : (
//             <div className='lg:w- m-auto'>
//               <h2 className='text-center text-black font-semibold py-5'>{menuResult.name}</h2>
//               <p className='text-center text-black font-extrabold py-5'>Number: {menuResult.number}</p>
//               <img className='lg:w-[1200px] md:w-[7000px] w-[7000px] m-auto' src={menuResult.image} alt="" />
//               {/* Display other menu item details as needed */}
//               {/* Add download button here */}
//               <div className="text-center">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                         onClick={() => generatePDF(menuResult)}>
//                   Download PDF
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Menu;
import { useState } from 'react';
import { FaPlay } from "react-icons/fa6";
import { saveAs } from 'file-saver';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Menu = () => {
  const [menuItemNumber, setMenuItemNumber] = useState('');
  const [menuResult, setMenuResult] = useState(null);
  const axiosSecure = useAxiosSecure();

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.get(`/menu/${menuItemNumber}`);
      setMenuResult(response.data);
    } catch (error) {
      console.error('Error:', error);
      setMenuResult({ error: 'An unexpected error occurred.' });
    }
    console.log(menuItemNumber)
  };
  const generatePDFContent = (menuData) => {
    if (menuData) {
      return `
        Menu Name: ${menuData.name}
        Menu Number: ${menuData.number}
        // Add more menu details as needed
      `;
    } else {
      return '';
    }
  };


  const downloadPDF = () => {
    if (menuResult) {
      // Generate PDF content
      const pdfContent = generatePDFContent(menuResult);
      console.log('PDF Content:', pdfContent); // Add this line to log the content to the console

      // Convert PDF content to Blob
      const pdfBlob = new Blob([pdfContent], { type: 'application/pdf' });
      console.log(pdfBlob);
      // Save PDF Blob as a file
      saveAs(pdfBlob, 'menu.pdf');
    }
  };

  return (
    <div>
      <form className='text-right mr-1 -mt-7 ' onSubmit={handleSearch}>
        <input
          type="text"
          className='border-2 text-black font-semibold border-red-300 px-1 w-32 rounded-md'
          id="menuItemNumber"
          value={menuItemNumber}
          onChange={(e) => setMenuItemNumber(e.target.value)}
          required
        />
        <button className='border-2 border-red-300 px-1 rounded-md ' type="submit">Search..........</button>
      </form>

      {menuResult && (
        <div className='bg-zinc-50'>
          {menuResult.error ? (
            <p>Error: {menuResult.error}</p>
          ) : (
            <div className='lg:w- m-auto'>
              <div className="overflow-x-auto">
                <table className="table table-pin-cols  className='text-black border border-black'">

                  <tbody className='text-black '>
                    <tr className='border border-black'>


                      <div className="flex items-center gap-3">
                        <td className='text-black w-96   border-r border-black '>

                          <div className="flex gap-2 items-center">
                            <div className="">
                              <span className=' relative bottom-2'>1.</span> <span className=' font-bold '>Preferred language</span>
                            </div>
                            <div className="form-control">
                              <div className="flex gap-8 w-9">
                                <div className="flex gap-2 items-center font-bold"><span><FaPlay /></span><input type="checkbox" checked="" className="checkbox " />English</div>
                                <div className="flex gap-2 items-center font-bold"> <input type="checkbox" checked="" className="checkbox " />French</div>
                              </div>
                            </div>
                          </div>

                        </td>
                       <div className="">
                       <div className="flex gap-2 items-center">
                            <div className="">
                              <span className=' relative bottom-2'>2.</span> <span className=' font-bold '>Preferred language</span>
                            </div>
                            <div className="form-control">
                              <div className="flex gap-8 w-9">
                                <div className="flex gap-2 items-center font-bold"><span><FaPlay /></span><input type="checkbox" checked="" className="checkbox " />Original</div>
                                <div className="flex gap-2 items-center font-bold"> <input type="checkbox" checked="" className="checkbox " />Duplicate</div>
                                <div className="flex gap-2 items-center font-bold"> <input type="checkbox" checked="" className="checkbox " />Amended <span><span><FaPlay /></span></span>
                                <div className="">
                                  <div className="">

                                  </div>
                                  <div className=""></div>
                                </div>
                                </div>
                              </div>
                            </div>
                          </div>
                       </div>
                      </div>

                    </tr>



                  </tbody>

                </table>
              </div>
              <h2 className='text-center text-black font-semibold py-5'>{menuResult.name}</h2>
              <p className='text-center text-black font-extrabold py-5'>Number: {menuResult.number}</p>
             
              <a href={menuResult.pdf}>
              <img className='lg:w-[1200px] md:w-[7000px] w-[7000px] m-auto' src={menuResult.image} alt="" />
              </a>
              
              <p className='text-center text-black font-extrabold py-5'>Number: </p>
            
              {/* Display other menu item details as needed */}
            </div>
          )}
        </div>
      )}

      {/* Download button */}
      {menuResult && (
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={downloadPDF}>
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
