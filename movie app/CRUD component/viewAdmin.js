
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeUser } from "../userSlice";
import { del } from "../userSlice";

const AdminUsers=()=>
{
    const dispatch=useDispatch()

    const handledel=(userid)=>{
        dispatch(removeUser({userid:userid}))
        dispatch(del(userid))
    }
    const {loading,userdata}=useSelector((state)=>state.user.value)

    return(
        <div>
            <h1>List of users</h1>
                {      
                userdata.map((item)=>(
                    <div>
                        <h1>{item.Title}</h1>
                        <p>{item.year}</p>
                        <p>Rating: {item.Rated}</p>
                        <p>Runtime: {item.Runtime}</p>
                        <button onClick={()=>handledel(item.id)}>delete</button> 

                    </div>
                ))
                }
        </div>
    )

}
export default AdminUsers
