import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../store/UsersSlice";

const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useSelector((state) => state.users);

  const intialState = {
    name: "",
    email: "",
    age: "",
    gender: "",
  };

  const [update, setUpdate] = useState(intialState);
  useEffect(() => {
    const singleUser = users.find((user) => user.id === id);
    setUpdate(singleUser);
  }, [id]);

  const getData = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(update));
    navigate("/");
  };

  return (
    <div className="card m-auto my-5" style={{ width: "40rem" }}>
      <div className="card-body">
        <div>
          <h2 className="text-center">Update the data</h2>
          <form
            className="w-50 mx-auto my-5 "
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-3">
              <label className="form-label fw-medium">Name :</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={update.name}
                onChange={(e) => getData(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Email :</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={update.email}
                onChange={(e) => getData(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-medium">Age :</label>
              <input
                type="number"
                name="age"
                value={update.age}
                className="form-control"
                onChange={(e) => getData(e)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={update.gender === "male"}
                onChange={(e) => getData(e)}
              />
              <label className="form-check-label fw-medium">Male</label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input"
                name="gender"
                type="radio"
                value="female"
                checked={update.gender === "female"}
                onChange={(e) => getData(e)}
              />
              <label className="form-check-label fw-medium">Female</label>
            </div>

            <button type="submit" className="btn btn-primary ">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
