import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../store/UsersSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState();

  const getUserData = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(newUser));
    navigate("/");
  };

  return (
    <div className="card m-auto my-5" style={{ width: "40rem" }}>
      <div className="card-body">
        <div>
          <h2 className="text-center">Fill the data</h2>
          <form className="w-50 mx-auto my-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
                onChange={(e) => getUserData(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
                onChange={(e) => getUserData(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input type="text" name="age" className="form-control" required />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                name="gender"
                type="radio"
                value="male"
                required
                onChange={(e) => getUserData(e)}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => getUserData(e)}
              />
              <label className="form-check-label">Female</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
