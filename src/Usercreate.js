import React from "react";

function Usercreate() {
  return (
    <div class="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label>
              <h4>User name</h4>
            </label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label>
              <h4>Email</h4>
            </label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <h4>Country</h4>
            </label>
            <select className="form-control">
              <option>India</option>
              <option>us</option>
              <option>china</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <h4>State</h4>
            </label>
            <select className="form-control">
              <option>Tamil nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <h4>City</h4>
            </label>
            <select className="form-control">
              <option>Chennai</option>
              <option>Coimbature</option>
              <option>Madurai</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <h4>Phone number</h4>
            </label>
            <input type={"text"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="form-group">
            <label>
              <h4>Date Of Birth </h4>
            </label>
            <input type={"date"} className="form-control" />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
            <label>
              <h4>Gender</h4>
            </label>
            <select className="form-control">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="form-group">
           <input type={"submit"} className="btn btn-primary"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercreate;
