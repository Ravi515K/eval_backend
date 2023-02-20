
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const Posts = () => {
     const [title,setTitle]=useState("")
       const [body,setBody]=useState("")
       const [device,setDevice]=useState("")
       const [comments,setComments]=useState("")

    
    const handleClick=()=>{
        const payload={
             title,body,device,
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
         
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div>
           <h1>Post Page</h1>
            <input placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} ></input>
            <input placeholder='body' value={body}  onChange={(e)=>setBody(e.target.value)}></input>
            <input placeholder='device' value={device} onChange={(e)=>setTitle(e.target.value)} ></input>
            <input placeholder='no_if_comments' value={comments}  onChange={(e)=>setComments(e.target.value)}></input>
          <button type="submit" onClick={handleClick}>Submit</button>
            
    </div>
  )
}
