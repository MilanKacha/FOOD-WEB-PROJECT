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
    // console.log(logInData);
    dispatched({ type: "RESET_FORM" });
  };

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
          {/* {errors.email && <span className="error">{errors.email}</span>} */}
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
          {/* {errors.password && <span className="error">{errors.password}</span>} */}
        </div>

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
