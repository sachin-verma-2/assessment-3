

import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import UpdateUser from "./CRUD using toolkit/CRUD component/UpdateUser";
import Main from "./movie app/CRUD component/main";
import ViewUsers from "./movie app/CRUD component/viewUsers";
import AdminUsers from "./movie app/CRUD component/viewAdmin";
import Adduser from "./movie app/CRUD component/AddUser";
function App() {
  return (
    <div>
       <BrowserRouter>
        <Link to='/'>View Contact</Link>
        <Link to='/add'>Add Contact</Link>

        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/customer" element={<ViewUsers></ViewUsers>}></Route>
          <Route path="/admin" element={<AdminUsers></AdminUsers>}>
          </Route>
          <Route path="/update" element={<UpdateUser></UpdateUser>}></Route>
          <Route path="/add" element={<Adduser></Adduser>}></Route>7
        </Routes>

      </BrowserRouter> 
    </div>
  )
}

export default App;
