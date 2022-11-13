import React from 'react'
import { useParams } from 'react-router-dom'

function Viewuser() {
    const params = useParams()
  return (
    <div class="container">
        <div class="row">
            <h1>Id:{params.id}</h1>
            <div class="col-lg-6">
               Username:Person1
            </div>
            <div class="col-lg-6">
            Email:Person2
            </div>
            <div class="col-lg-6">
            country:Person2
            </div>
            <div class="col-lg-6">
            state:Person2
            </div>
            <div class="col-lg-6">
            city:Person2
            </div>
            <div class="col-lg-6">
            phonenumber:Person2
            </div>
            <div class="col-lg-6">
            dob:Person2
            </div>
            <div class="col-lg-6">
            gender:Person2
            </div>
    
    
      </div>
      </div>
  )
}

export default Viewuser