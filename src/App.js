import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "./css/sb-admin-2.css";
import Topbar from "./Topbar";
import User from "./User";
import Usercreate from "./Usercreate";
import Dashboard from "./Dashboard";
import ViewUser from "./ViewUser";
import EditUser from "./Edituser";
import { BrowserRouter, Route, Routes } from "react-router-dom";



//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/user_create" element={<Usercreate />}></Route>
              <Route path="/user/:id" element={<ViewUser />}></Route>
              <Route path="/edit/:id" element={<EditUser />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
