import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Adminlogin() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
 async function handlesubmit(e){
    e.preventDefault()
    console.log("clicked")
    const user={email,password}
    const res= await axios.post('http://localhost:3000/api/admin',user)
    const data=res.data
    console.log("Server response:", res.data);

    if(data.msg=="success"){
        window.alert("welcome back")
        navigate('/admindash')
    }else{
        window.alert("username or password is wrong")
    }

  }
    return (
      <div>
        <div className="row">
            <div className="col-sm-12 signin">
                <form action="" onSubmit={handlesubmit} className='mb-4'>
                    <h4 className='mb-4'>Admin Login</h4>
                    <input type="text"className='form-control bg-transparent' onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'  />
                    <br />
                     <input type="password"className='form-control bg-transparent'  onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'  />
                    <br />
                    <input type="submit" value="Login" className='form-control btn btn-primary' />

                    
                     </form>
            </div>
        </div>
      </div>
    )
  }


export default Adminlogin
