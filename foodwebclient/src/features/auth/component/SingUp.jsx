import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { createUserAsync } from "../authSlice";

const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const signUpReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const SingUp = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [signUpData, dispatched] = useReducer(signUpReducer, initialState);

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      // submit data to backend
      createUserAsync({
        email: signUpData.email,
        password: signUpData.password,
        passwordConfirm: signUpData.passwordConfirm,
      })
    )
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error("Signup failed:", error);
      });
    // console.log(signUpData);
    dispatched({ type: "RESET_FORM" });
  };

  const handelInputChange = (field, value) => {
    dispatched({ type: "UPDATE_FIELD", field, value });
  };
  return (
    <div>
      <h2 style={{ color: "black" }}>Sign Up</h2>
      <form onSubmit={handelSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signUpData.email}
            onChange={(e) => handelInputChange("email", e.target.value)}
          />
          {/* {errors.email && <span className="error">{errors.email}</span>} */}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={signUpData.password}
            onChange={(e) => {
              handelInputChange("password", e.target.value);
            }}
          />
          {/* {errors.password && <span className="error">{errors.password}</span>} */}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="passwordConfirm"
            value={signUpData.passwordConfirm}
            onChange={(e) => {
              handelInputChange("passwordConfirm", e.target.value);
            }}
          />
          {/* {errors.passwordConfirm && (
            <span className="error">{errors.passwordConfirm}</span>
          )} */}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SingUp;
