
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    
    const handleClick=()=>{
        const payload={
             email,password,
        };

        fetch(" https://dark-ruby-haddock-veil.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-type':"application/json",

            }

        }).then((res)=>{
            res.json()
        }).then(res=>{console.log(res)
           navigate("/login")
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
           <h1>LoginPage</h1>
            <input placeholder='name' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            <input placeholder='password' value={password}  onChange={(e)=>setPassword(e.target.value)}></input>
           
          <button type="submit" onClick={handleClick}>Submit</button>
            
    </div>
  )
}
