import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function User() {
  const [users,setUsres] = useState([]);
  useEffect(() => {
  setUsres([
      {
          id: 1,
          username:"person 1",
          email:"person1@gmail.com",
          country:"India",
          state:"tamilnadu",
          city:"chennai",
          phonenumber:"9576849495",
          dob:"23-05-2000",
          gender:"male"
      },
      {
          id: 2,
          username:"person 2",
          email:"person2@gmail.com",
          country:"India",
          state:"tamilnadu",
          city:"Madurai",
          phonenumber:"9576845695",
          dob:"31-12-2000",
          gender:"male"
      },
      {
        id: 3,
        username:"person 2",
        email:"person2@gmail.com",
        country:"India",
        state:"tamilnadu",
        city:"Madurai",
        phonenumber:"9576845695",
        dob:"31-12-2000",
        gender:"male"
    }
  ])
  },[])
  let deleteuser =()=> {
    const result = window.confirm("Are you sure do you want to delete?")
    if(result){
  alert("Deleted")
    }
  }
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Users</h1>
        <Link
          to={"/User_create"}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone number</th>
                  <th>dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone number</th>
                  <th>dob</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
               
               {users.map((user)=> {
                return <tr>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td> {user.email}</td>
                <td>{user.country}</td>
                <td>{user.state}</td>
                <td>{user.city}</td>
                <td>{user.phonenumber}</td>
                <td>{user.dob}</td>
                <td>{user.gender}</td>


                <td>
                  <Link to={`/user/${user.id}`} className="btn btn-warning mr-2">
                      view
                      </Link>
                      <Link to={`/edit/${user.id}`} className="btn btn-primary mr-2">
                      Edit
                      </Link>
                      <button onClick={()=> deleteuser()} className="btn btn-danger">Delete</button>
               </td>
              </tr>
               })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
