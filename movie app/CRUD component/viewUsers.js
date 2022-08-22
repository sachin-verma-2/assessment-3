
import { useSelector } from "react-redux";


const ViewUsers=()=>
{
    const {loading,userdata}=useSelector((state)=>state.user.value)
    const newdata=[...userdata].sort((a,b)=>Number(a.Year)-Number(b.Year))
    console.log(userdata)
    return(
        <div>
            <h1>List of movies</h1>
                {      
                newdata.map((item)=>(
                    <div>
                        <h1>{item.Title}</h1>
                        <p>{item.year}</p>
                        <p>Rating: {item.Rated}</p>
                        <p>Runtime: {item.Runtime}</p>
                        <p>Year: {item.Year}</p>
                    </div>
                ))
                }
        </div>
    )

}
export default ViewUsers
