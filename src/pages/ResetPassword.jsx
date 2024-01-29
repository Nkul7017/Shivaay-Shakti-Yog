import React from 'react'
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import { isPassword } from '../utils/passwordvalidation';

function ResetPassword() {
    const [data, setData] = useState({
        password:"",
        message:""
    })
    const navigate = useNavigate()
    const {id, token} = useParams()
    console.log(id,token);

    const handleSubmit = async(e) => {
        setData({...data,message:"loading"})
        e.preventDefault()
    if(isPassword(data.password.trim()))
    {
  
     try {
        let response=await axios.post(`https://shivaay-shakti-backend-1.onrender.com/api/auth/reset-password/${id}/${token}`, {password:data.password});
        // let response=await axios.post(`http://localhost:5000/api/auth/reset-password/${id}/${token}`, {password});
        console.log(response);
        if(response.status===200)
        {
            navigate('/Login')
        }
     } catch (e) {
        console.log(e);
         setData({...data,message:e?.response?.data?.message})
     }}
     else{
        setData({...data,message:"Enter Password"})
     }
    }

    return(
        <>
    <div className="w-screen h-screen bg-[#FFF1C1] grid place-content-center ">
      <div className=" p-4 rounded-lg w-[300px] sm:w-[500px] h-[300px]">
        <h4 className=' text-2xl sm:text-5xl heading'>Change Password</h4>
        <form className='mt-6' onSubmit={handleSubmit}>
          <div className=' flex flex-col gap-2 '>
         <label className=' text-2xl bluish ml-1 ' htmlFor="">New Password</label>
         <input  
             type="password"
             placeholder="Enter Password"
             autoComplete="off"
             name="password"
              onChange={(e) => setData({...data,password:e.target.value})}
               className=' font-semibold  border border-gray-300 px-3   text-red-900  rounded-lg py-1 '  />
         </div>
          <button type="submit" className="button3 ml-2 mt-7 text-2xl px-3 py-1 ">
            <span>Update</span>
          </button>
          <p className='mt-1 font-bold text-center text-red-500'>{data?.message}</p>
          </form>
        
      </div>
    </div>
    </>
    )
}

export default ResetPassword;