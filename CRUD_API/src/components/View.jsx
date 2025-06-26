import React from "react";
import { useSelector } from "react-redux";

const View = ({ id, setPopUp }) => {
  const { users } = useSelector((state) => state.users);

  const singleUser = users.find((user) => user.id === id);

  return (
    <div className="card m-auto my-5" style={{ width: "50%" }}>
      <h5 className="card-title m-auto my-3 fw-bolder">User Details</h5>
      <div className="card m-auto mb-3 p-3 " style={{ width: "70%" }}>
        <button
          type="button"
          className="btn btn-danger btn-sm "
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={() => setPopUp(false)}
        >
          X
        </button>
        <p className="card-text mt-2 fw-medium">Id: {singleUser.id} </p>
        <p className="card-text mt-2 fw-medium">Name: {singleUser.name}</p>
        <p className="card-text fw-medium">Email: {singleUser.email}</p>
        <p className="card-text fw-medium">Age: {singleUser.age}</p>
        <p className="card-text fw-medium">Gender: {singleUser.gender}</p>
      </div>
    </div>
  );
};

export default View;
