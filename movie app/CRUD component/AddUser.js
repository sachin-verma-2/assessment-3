import { useDispatch } from "react-redux"
import { useState } from "react"
import { addUser } from "../userSlice"
import { add } from "../userSlice"


const Adduser=()=>
{
    const[Title,setTitle]=useState('')
    const[Year,setYear]=useState('')
    const[Rated,setRated]=useState('')
    const[Runtime,setRuntime]=useState('')


    const dispatch=useDispatch()
    const fun=()=>
    {
        dispatch(addUser({Title:Title,Year:Year,Rated:Rated,Runtime:Runtime}))
        dispatch(add({Title:Title,Year:Year,Rated:Rated,Runtime:Runtime}))
    }
    const changeeve=(e,key)=>
    {
        e.preventDefault()
        if(key==="title")
        {
            setTitle(e.target.value)
        }
        if(key==='year')
        {
            setYear(e.target.value)
        }

        if(key==='rated')
        {
            setRated(e.target.value)
        }

            if(key==='runtime')
        {
            setRuntime(e.target.value)
        }
    }
    return(
        <div>
            Title:<input type="text" onChange={(e)=>changeeve(e,'title')}></input>
            Year:<input type="text" onChange={(e)=>changeeve(e,'year')}></input>
            Rated:<input type="text" onChange={(e)=>changeeve(e,'rated')}></input>
            Runtime:<input type="text" onChange={(e)=>changeeve(e,'runtime')}></input>


            <button onClick={fun}>add contact</button>
        </div>
    )
}
export default Adduser