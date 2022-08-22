import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchdata=createAsyncThunk('/movie app/fetchdata',async ()=>{
    try{
            const result=await axios.get('http://localhost:3001/empDetails')
            console.log('inside axios')
            // console.log(result)

            return result.data
    }
    catch(e)
    {
        console.log(e)
    }
})
export const add=createAsyncThunk('/movie app/add',async(a)=>{
    try{
        await axios.post('http://localhost:3001/empDetails',{
            id:Date.now(),
            Title:a.Title,
            Year:a.Year,
            Rated:a.Rated,
            Runtime:a.Runtime
        })
    }
    
    catch(e)
    {
        console.log(e.response.data)
    }
})
export const del=createAsyncThunk('/CRUD using toolkit/del',async(itemid)=>{
    try{
        await axios.delete(`http://localhost:3001/empDetails/${itemid}`)
    }
    catch(e)
    {
        console.log(e)
    }
})

const initialvalue={
userdata:[]
}

const userSlice=createSlice({
    name:'user',
    initialState:{
        value:initialvalue
    },
    reducers:
    {
        addUser:(state,action)=>{
            console.log(action.payload)
            state.value.userdata.push(action.payload)

        },
        removeUser:(state,action)=>{
            console.log(action.payload)
            state.value.userdata=state.value.userdata.filter((item)=>item.id!==action.payload.userid)
        }
    },
    extraReducers:
    {
        [fetchdata.pending]:(state,action)=>{
            console.log("pending",action)
            state.value.loading=true;
        },
        [fetchdata.fulfilled]:(state,action)=>
        {

            console.log("fulfilled",action.payload)
            state.value.loading=false;
            state.value.userdata=[...state.value.userdata,...action.payload]
            console.log(state.value.userdata)
            console.log('hi')
        },
        [fetchdata.rejected]:(state,action)=>{
            console.log('fullfiled',action)
            state.value.loading=false
        }
    }


})

export const {addUser,removeUser}=userSlice.actions
export default userSlice.reducer
