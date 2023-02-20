import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Sign = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")
    const [age,setAge]=useState("")
    const [city,setCity]=useState("")
    const navigate=useNavigate()
    
    const handleClick=()=>{
        const payload={
            name, email,gender,password,age,city
        };

        fetch(" https://dark-ruby-haddock-veil.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                'Content-type':"application/json"
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
        <h1>Sign-Up Page</h1>
            <input placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}  ></input>
            <input placeholder='name' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
            <input placeholder='gender' value={gender} onChange={(e)=>setGender(e.target.value)} ></input>
            <input placeholder='password' value={password}  onChange={(e)=>setPassword(e.target.value)}></input>
            <input placeholder='age' value={age} onChange={(e)=>setAge(e.target.value)} ></input>
            <input placeholder='city' value={city}  onChange={(e)=>setCity(e.target.value)}></input>
          <button type="submit" onClick={handleClick}>Submit</button>
            
    </div>
  )
}
