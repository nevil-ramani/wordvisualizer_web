// 'use client';
// import Image from "next/image";
// import { useEffect,useState } from "react";


// export default function Home() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/api/getdata')
//       .then(response => response.json())
//       .then(data => {console.log(data);
//       setData(data);
//       }
      
//       );

//   }, []);


//   console.log("data uigfuihhfioh hiohioiodhsiogh huiofhioho",data);

//   return (
// //     <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
// //       <div classNameName="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
// //         <p classNameName="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
// //           Get started by editing&nbsp;
// //           <code classNameName="font-mono font-bold">app/page.tsx</code>
// //         </p>
// //         <div classNameName="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
// //           <a
// //             classNameName="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
// //             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/vercel.svg"
// //               alt="Vercel Logo"
// //               classNameName="dark:invert"
// //               width={100}
// //               height={24}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>

// //       <div classNameName="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
// //         <Image
// //           classNameName="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
// //           src="/next.svg"
// //           alt="Next.js Logo"
// //           width={180}
// //           height={37}
// //           priority
// //         />
// //       </div>

// //       <div classNameName="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
// //         <a
// //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
// //             Docs{" "}
// //             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Find in-depth information about Next.js features and API.
// //           </p>
// //         </a>

// //         <a
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
// //             Learn{" "}
// //             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Learn about Next.js in an interactive course with&nbsp;quizzes!
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
// //             Templates{" "}
// //             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
// //             Explore starter templates for Next.js.
// //           </p>
// //         </a>

// //         <a
// //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //           classNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <h2 classNameName={`mb-3 text-2xl font-semibold`}>
// //             Deploy{" "}
// //             <span classNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// //               -&gt;
// //             </span>
// //           </h2>
// //           <p classNameName={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
// //             Instantly deploy your Next.js site to a shareable URL with Vercel.
// //           </p>

// //           {/* //list data is here */}
// //           <ul>
// //   {Array.isArray(data) && data.map((item: { ID: number }) => (
// //     <li key={item.ID}>{item.ID}</li>

// //   ))}
// // </ul>
// //         </a>
// //       </div>
// //     </main>

// <div>
// {JSON.stringify(data)}
// </div>
//   );
// }

















// 'use client';
// import Image from "next/image";
// // import Script from "next/script";
// import { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"




// export default function Home() {
//   // const [data, setData] = useState();
//   type DataType = {
//     rows: any[]; // replace any[] with the actual type of the rows, if known
//   };
  
//   const [data, setData] = useState<DataType | null>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedHtmlCode, setSelectedHtmlCode] = useState("");

//   const openModal = (htmlCode: string) => {
//     setSelectedHtmlCode(htmlCode);
//     setIsOpen(true);
//   };



//   // const openModal = () => {
//   //   setIsOpen(true);
//   // };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
 
// console.log(isOpen);
// console.log(selectedHtmlCode)

//   useEffect(() => {
//     fetch('/api/getdata')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return (
//     // <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
//     //   {/* ... Your other components ... */}
      
//     //   <ul>
//     //     {Array.isArray(data) && data.map((item: { ID: number }) => (
//     //       <li key={item.ID}>{item.ID}</li>
//     //     ))}
//     //   </ul>
//     // </main>
// <div>
// {data && (
//   <ul>
//     {data.rows.map((row, index) => (
//       <li key={index}>
//         {/* {JSON.stringify(row)} */}
//       </li>
//     ))}
//     </ul>
//     )}


//     {/* <a href="#" classNameName="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <Image classNameName="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUdMrRa4_tTFByXn2VlOjBb1pXQHe_R3uURWqQq5_rFnt30PyFBiV80DtL4mQ" alt=""/>
//         <div classNameName="flex flex-col justify-between p-4 leading-normal">
//             <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//             <p classNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         </div>
//     </a> */}


//     {data && (
//       <ul>
//         {data.rows.map((row, index) => {
//           var htmlCode = row[3];
//           // setHtml(row[3]);

//           // Create a temporary div element to parse the HTML
//     let tempDiv = document.createElement('div');
//     tempDiv.innerHTML = htmlCode;

//     // Find the first image element within the parsed HTML
//     let firstImage = tempDiv.querySelector('img');


//     var imageUrl;

//     // Check if an image is found
//     if (firstImage) {
//       // Get the 'src' attribute of the first image
//       imageUrl = firstImage.getAttribute('src');
//       console.log('First image URL:', imageUrl);
//     } else {
//       console.log('No image found in the HTML code.');
//     }



//     return (

//       <>
//       <li key={index} onClick={() => openModal(row[3])}>
//               <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//                 {/* <Image classNameName="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUdMrRa4_tTFByXn2VlOjBb1pXQHe_R3uURWqQq5_rFnt30PyFBiV80DtL4mQ" alt=""/> */}
//                 <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl ?? ""} alt=""/>
//                 <div className="flex flex-col justify-between p-4 leading-normal">
//                   {/* <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{row[1]}</p>
//                 </div>
//               </a>
//             </li>


//             {isOpen ? (
//         <>
   
//    <Dialog>
//          <DialogTrigger>Open</DialogTrigger>
//          <DialogContent>
//            <DialogHeader>
//              <DialogTitle>Are you absolutely sure?</DialogTitle>
//              <DialogDescription>
//                This action cannot be undone. This will permanently delete your account
//                and remove your data from our servers.
//              </DialogDescription>
//            </DialogHeader>
//          </DialogContent>
//        </Dialog>
          
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}

        
      


//             {/* {isOpen && (
// <div id="hs-custom-backdrop-modal" className="hs-overlay hs-overlay-backdrop-open:bg-blue-950/90 hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
//   <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//     <div className="flex flex-col bg-black border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
//       <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
//         <h3 className="font-bold text-gray-800 dark:text-white">
//           Modal title
//         </h3>
//         <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
//           <span className="sr-only">Close</span>
//           <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
//         </button>
//       </div>
//       <div className="p-4 overflow-y-auto">
//         <p className="mt-1 text-gray-800 dark:text-gray-400">
//           This is a wider card with supporting text below as a natural lead-in to additional content.
//         </p>
//       </div>
//       <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
//           Close
//         </button>
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//       )} */}
// </>
//           );
          
          
//           // function handleClick(e: React.MouseEvent) {
//           //   e.preventDefault();
//           //   console.log(row[3])
//           //   // alert('The link was clicked.');
//           //   setIsOpen(true);
            
            
//           // }
          
          
//         })
//       }



// {/* {isOpen ? (
//         <>
   
//    <Dialog>
//          <DialogTrigger>Open</DialogTrigger>
//          <DialogContent>
//            <DialogHeader>
//              <DialogTitle>Are you absolutely sure?</DialogTitle>
//              <DialogDescription>
//                This action cannot be undone. This will permanently delete your account
//                and remove your data from our servers.
//              </DialogDescription>
//            </DialogHeader>
//          </DialogContent>
//        </Dialog>
          
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null} */}
    
    
//   </ul>


// )}



// </div>
//   );
// }









// // 'use client'

// // import Image from "next/image";
// // import { useEffect, useState } from "react";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogDescription,
// //   DialogHeader,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog"

// // export default function Home() {
// //   type DataType = {
// //     rows: any[];
// //   };

// //   const [data, setData] = useState<DataType | null>(null);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [imageUrl, setImageUrl] = useState<string | null>(null);

// //   useEffect(() => {
// //     fetch('/api/getdata')
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log(data);
// //         setData(data);
// //       });
// //   }, []);

// //   const handleClick = (e: React.MouseEvent, htmlCode: string) => {
// //     e.preventDefault();
// //     console.log(htmlCode);
// //     setIsOpen(true);
// //     setImageUrl(htmlCode);
// //   };

// //   return (
// //     <div>
// //       {data && (
// //         <ul>
// //           {data.rows.map((row, index) => (
// //             <li key={index} onClick={(e) => handleClick(e, row[3])}>
// //               <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
// //                 <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl ?? ""} alt=""/>
// //                 <div className="flex flex-col justify-between p-4 leading-normal">
// //                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{row[1]}</p>
// //                 </div>
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// //       <Dialog open={isOpen}>
// //         <DialogTrigger>Open</DialogTrigger>
// //         <DialogContent>
// //           <DialogHeader>
// //             <DialogTitle>Are you absolutely sure?</DialogTitle>
// //             <DialogDescription>
// //               This action cannot be undone. This will permanently delete your account
// //               and remove your data from our servers.
// //             </DialogDescription>
// //           </DialogHeader>
// //         </DialogContent>
// //       </Dialog>
// //     </div>
// //   );
// // }








// 'use client';
// import Image from "next/image";
// // import Script from "next/script";
// import { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"




// export default function Home() {
//   // const [data, setData] = useState();
//   type DataType = {
//     rows: any[]; // replace any[] with the actual type of the rows, if known
//   };
  
//   const [data, setData] = useState<DataType | null>(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedHtmlCode, setSelectedHtmlCode] = useState("");

//   const openModal = (htmlCode: string) => {
//     setSelectedHtmlCode(htmlCode);
//     setIsOpen(true);
//   };



//   // const openModal = () => {
//   //   setIsOpen(true);
//   // };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
 
// console.log(isOpen);
// console.log(selectedHtmlCode)

//   useEffect(() => {
//     fetch('/api/getdata')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return (
//     // <main classNameName="flex min-h-screen flex-col items-center justify-between p-24">
//     //   {/* ... Your other components ... */}
      
//     //   <ul>
//     //     {Array.isArray(data) && data.map((item: { ID: number }) => (
//     //       <li key={item.ID}>{item.ID}</li>
//     //     ))}
//     //   </ul>
//     // </main>
// <div>
// {data && (
//   <ul>
//     {data.rows.map((row, index) => (
//       <li key={index}>
//         {/* {JSON.stringify(row)} */}
//       </li>
//     ))}
//     </ul>
//     )}


//     {/* <a href="#" classNameName="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//         <Image classNameName="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUdMrRa4_tTFByXn2VlOjBb1pXQHe_R3uURWqQq5_rFnt30PyFBiV80DtL4mQ" alt=""/>
//         <div classNameName="flex flex-col justify-between p-4 leading-normal">
//             <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//             <p classNameName="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//         </div>
//     </a> */}


//     {data && (
//       <ul>
//         {data.rows.map((row, index) => {
//           var htmlCode = row[3];
//           // setHtml(row[3]);

//           // Create a temporary div element to parse the HTML
//     let tempDiv = document.createElement('div');
//     tempDiv.innerHTML = htmlCode;

//     // Find the first image element within the parsed HTML
//     let firstImage = tempDiv.querySelector('img');


//     var imageUrl;

//     // Check if an image is found
//     if (firstImage) {
//       // Get the 'src' attribute of the first image
//       imageUrl = firstImage.getAttribute('src');
//       console.log('First image URL:', imageUrl);
//     } else {
//       console.log('No image found in the HTML code.');
//     }



//     return (

//       <>
//       <li key={index} onClick={() => openModal(row[3])}>
//               <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//                 {/* <Image classNameName="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUdMrRa4_tTFByXn2VlOjBb1pXQHe_R3uURWqQq5_rFnt30PyFBiV80DtL4mQ" alt=""/> */}
//                 <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl ?? ""} alt=""/>
//                 <div className="flex flex-col justify-between p-4 leading-normal">
//                   {/* <h5 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> */}
//                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{row[1]}</p>
//                 </div>
//               </a>
//             </li>


//             {isOpen ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none pt-20"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
//                   <h3 className="text-3xl font-semibold">
//                     Modal Title
//                   </h3>
//                   <button
//                     className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
//                       ×
//                     </span>
//                   </button>
//                 </div>
//                 {/*body*/}
//                 <div className="relative p-6 flex-auto">
//                   <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                     {/* {htmlCode} */}

//                     {/* hello world hello hello */}


              
//                   </p>
//                   <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
//                     <div dangerouslySetInnerHTML={{ __html: selectedHtmlCode}}></div>
//                   </div>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                   <button
//                     className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}

        
      


//             {/* {isOpen && (
// <div id="hs-custom-backdrop-modal" className="hs-overlay hs-overlay-backdrop-open:bg-blue-950/90 hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
//   <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
//     <div className="flex flex-col bg-black border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
//       <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
//         <h3 className="font-bold text-gray-800 dark:text-white">
//           Modal title
//         </h3>
//         <button type="button" className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
//           <span className="sr-only">Close</span>
//           <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
//         </button>
//       </div>
//       <div className="p-4 overflow-y-auto">
//         <p className="mt-1 text-gray-800 dark:text-gray-400">
//           This is a wider card with supporting text below as a natural lead-in to additional content.
//         </p>
//       </div>
//       <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-custom-backdrop-modal">
//           Close
//         </button>
//         <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
//           Save changes
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//       )} */}
// </>
//           );
          
          
//           // function handleClick(e: React.MouseEvent) {
//           //   e.preventDefault();
//           //   console.log(row[3])
//           //   // alert('The link was clicked.');
//           //   setIsOpen(true);
            
            
//           // }
          
          
//         })
//       }



// {/* { isOpen && ( */}



// {/* )} */}
    
    
//   </ul>


// )}



// </div>
//   );
// }



































// 'use client';
// import Image from "next/image";
// // import Script from "next/script";
// import { useEffect, useState } from "react";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"





// export default function Home() {
//   // const [data, setData] = useState();
//   type DataType = {
//     rows: any[]; // replace any[] with the actual type of the rows, if known
//   };
  
//   const [data, setData] = useState<DataType | null>(null);



//   useEffect(() => {
//     fetch('/api/getdata')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

//   return (

// <div>

// <div className="p-3 sm:p-4 ">
//    <div className="columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-4 lg:columns-4 [&>img:not(:first-child)]:mt-8"> 


//     {data && (
//       <ul>
//         {data.rows.map((row, index) => {
//           var htmlCode = row[3];
//           // setHtml(row[3]);

//           // Create a temporary div element to parse the HTML
//     let tempDiv = document.createElement('div');
//     tempDiv.innerHTML = htmlCode;
//     // sethtmlcode(row[3].toString());

//     // Find the first image element within the parsed HTML
//     let firstImage = tempDiv.querySelector('img');


//     var imageUrl;

//     // Check if an image is found
//     if (firstImage) {
//       // Get the 'src' attribute of the first image
//       imageUrl = firstImage.getAttribute('src');
//       console.log('First image URL:', imageUrl);
//     } else {
//       console.log('No image found in the HTML code.');
//     }



//     return (

// <>
//   <Dialog>
//     <DialogTrigger asChild>



// <div className="group relative rounded-3xl  space-y-6 overflow-hidden">


// <div className="relative w-full flex items-end justify-center text-left bg-cover bg-center"
//       style={{ height: '350px', backgroundImage: `url(${imageUrl ?? ""} )` }}>
//             <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
//             </div>
//             <main className="p-5 z-10">
//                 <a href="#"
//                     className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
//                     {row[1]}
//                 </a>
//             </main>
//       </div>

// </div>

      

//     </DialogTrigger>
 

// <DialogContent className="h-[80vh] max-w-xl">

//   <DialogHeader>
//     <DialogTitle className="pb-5">{row[1]}</DialogTitle>
//     <DialogDescription>
//     <ScrollArea className="h-[70vh]">
//       <div>
//         <div dangerouslySetInnerHTML={{ __html: row[3]}}></div>
//       </div>
//     </ScrollArea>
//     </DialogDescription>
//   </DialogHeader>
// </DialogContent>
//   </Dialog>

// </>
//           );
          
    
          
//         })
//       }

    
//   </ul>


// )}

// </div>
// </div>


// </div>
//   );
// }
















'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

type DataType = {
  rows: any[]; // replace any[] with the actual type of the rows, if known
};

export default function Home() {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    fetch('/api/getdata')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="p-3 sm:p-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {data && data.rows.map((row, index) => {
          var htmlCode = row[3];
          let tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlCode;
          let firstImage = tempDiv.querySelector('img');
          var imageUrl;
          if (firstImage) {
            imageUrl = firstImage.getAttribute('src');
            console.log('First image URL:', imageUrl);
          } else {
            console.log('No image found in the HTML code.');
          }

          return (
            <li key={index} className="group relative rounded-3xl space-y-6 overflow-hidden">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative w-full flex items-end justify-center text-left bg-cover bg-center"
                    style={{ height: '350px', backgroundImage: `url(${imageUrl ?? ""} )` }}>
                    <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
                    </div>
                    <main className="p-5 z-10">
                      <a href="#"
                        className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
                        {row[1]}
                      </a>
                    </main>
                  </div>
                </DialogTrigger>
                <DialogContent className="h-[80vh] max-w-xl">
                  <DialogHeader>
                    <DialogTitle className="pb-5">{row[1]}</DialogTitle>
                    <DialogDescription>
                      <ScrollArea className="h-[70vh]">
                        <div>
                          <div dangerouslySetInnerHTML={{ __html: row[3] }}></div>
                        </div>
                      </ScrollArea>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
          );
        })}
      </div>
    </div>
  );
}