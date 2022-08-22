import React from "react";
import { useNavigate } from "react-router-dom";

const Main=()=>{
    const navigate=useNavigate()
    const handlenavigate=(e,key)=>
    {
       e.preventDefault()
       if(key==='admin')
           navigate('/admin')
       if(key==='customer')
           navigate('/customer')
   
    }
    return(
        <div>
            <h1>welcome to movie app</h1>
            <button onClick={(e)=>handlenavigate(e,'admin')}>admin</button>
            <button onClick={(e)=>handlenavigate(e,'customer')}>Customer</button>

        </div>
    )
}
export default Main