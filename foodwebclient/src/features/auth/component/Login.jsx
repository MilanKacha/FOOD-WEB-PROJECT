import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { logInUserAsync } from "../authSlice";
import Button from "../../../ui/Button";

const initialState = {
  email: "",
  password: "",
};

const logInReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const Login = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [logInData, dispatched] = useReducer(logInReducer, initialState);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      // submit data to backend
      logInUserAsync({
        email: logInData.email,
        password: logInData.password,
      })
    )
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error("Signup failed:", error);
      });

    dispatched({ type: "RESET_FORM" });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await dispatch(
  //       logInUserAsync({
  //         email: logInData.email,
  //         password: logInData.password,
  //       })
  //     );

  //     if (logInUserAsync.fulfilled.match(response)) {
  //       // Handle successful login here, e.g., navigate to a new page
  //       console.log("Successfully logged in");
  //     }
  //   } catch (error) {
  //     // Handle login failure, display toast message, or update state accordingly
  //     console.error("Login failed:", error);
  //   }
  // };

  const handelInputChange = (field, value) => {
    dispatched({ type: "UPDATE_FIELD", field, value });
  };
  return (
    <div>
      <h2 style={{ color: "black" }} className="updateform-heading">
        Log In
      </h2>
      <form onSubmit={handelSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={logInData.email}
            onChange={(e) => handelInputChange("email", e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={logInData.password}
            onChange={(e) => {
              handelInputChange("password", e.target.value);
            }}
          />
        </div>

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
