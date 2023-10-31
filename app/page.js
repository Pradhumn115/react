"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const notify = () => {
    toast.success('🦄 Wow so easy!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };
  return (
    <div>
      <button onClick={notify} className='px-8 py-4 m-12 rounded-xl font-bold border-2 bg-cyan-500 text-xl text-white'>Login</button>
      <ToastContainer/>
    </div>
  )
}

export default page