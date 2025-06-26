import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers, searchUser } from "../store/UsersSlice";
import LoadingSpinner from "./LoadingSpinner";
import View from "./View";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loading, searchUser } = useSelector((state) => state.users);

  const [radiobtn, setRadioBtn] = useState("");
  const [id, setId] = useState(null);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner />;
  }
  const maleCount = users.filter((user) => user.gender === "male").length;
  const femaleCount = users.filter((user) => user.gender === "female").length;

  return (
    <div>
      {popUp ? (
        <View id={id} setPopUp={setPopUp}></View>
      ) : (
        <div className="card m-auto my-5 " style={{ width: "50%" }}>
          <h5 className="card-title m-auto my-3 fw-bolder">All User Details</h5>
          <div className="d-flex justify-content-center align-items-center gap-3 my-3 bg-secondary text-white  p-3">
            <input
              className="form-check-input"
              type="radio"
              checked={radiobtn === ""}
              onChange={() => setRadioBtn("")}
            />
            <label className="form-check-label">
              All{radiobtn === "" && `(${users.length})`}
            </label>
            <input
              className="form-check-input"
              value="male"
              type="radio"
              onChange={(e) => setRadioBtn(e.target.value)}
              checked={radiobtn === "male"}
            />
            <label className="form-check-label">
              Male{radiobtn === "male" && `(${maleCount})`}
            </label>
            <input
              className="form-check-input"
              value="female"
              type="radio"
              onChange={(e) => setRadioBtn(e.target.value)}
              checked={radiobtn === "female"}
            />
            <label className="form-check-label">
              Female{radiobtn === "female" && `(${femaleCount})`}
            </label>
          </div>

          <h5 className="card-title m-auto my-3 fw-bolder">All User Details</h5>
          {users &&
            users
              .filter((user) =>
                searchUser.length === 0
                  ? users
                  : user.name.toLowerCase().includes(searchUser.toLowerCase())
              )
              .filter((user) => {
                if (radiobtn === "male") {
                  return user.gender === radiobtn;
                } else if (radiobtn === "female") {
                  return user.gender === radiobtn;
                } else return user;
                const maleCount = users.filter(
                  (u) => u.gender === "male"
                ).length;
              })

              .map((user) => (
                <div className="card-body m-auto " key={user.id}>
                  <p className="card-text mt-2">Id: {user.id} </p>
                  <p className="card-text mt-2">Name: {user.name}</p>
                  <p className="card-text">Email: {user.email}</p>
                  <p className="card-text">Gender: {user.gender}</p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => (setId(user.id), setPopUp(true))}
                  >
                    View
                  </button>
                  <Link
                    to={`/update/${user.id}`}
                    type="button"
                    className="btn btn-secondary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteUser(user.id))}
                  >
                    Delete
                  </button>
                  <hr />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

export default Home;
