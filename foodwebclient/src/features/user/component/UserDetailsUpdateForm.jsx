import { useReducer } from "react";
import "../../../style/userdetailsupdateform.css";
import Button from "../../../ui/Button";
import { State } from "country-state-city";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, updateUserAsync } from "../userSlice";
import { useLocation } from "react-router-dom";

const initialState = {
  username: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  pincode: "",
  state: "",
  country: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "UPDATE_PROFILE_PICTURE":
      return { ...state, profilePicture: action.file };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

const UserDetailsUpdateForm = ({ closeModal }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);

  const user = useSelector(selectUserInfo);
  const userUpdateFormdispatch = useDispatch();
  const location = useLocation();
  // console.log(location.pathname);

  const handelInputChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  // for submit & update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userUpdateFormdispatch(updateUserAsync({ ...user, ...formData }));
      closeModal();
    } catch (error) {
      // Handle errors if necessary
    }
    // reset form after submission
    dispatch({ type: "RESET_FORM" });
  };

  return (
    <>
      <div className="updateprofile">
        <form onSubmit={handleSubmit}>
          {location.pathname === "/user" && (
            <h2 style={{ color: "black" }} className="updateform-heading">
              Update Your Profile
            </h2>
          )}
          {location.pathname === "/checkout" && (
            <h2 style={{ color: "black" }} className="updateform-heading">
              Update Shipping Details
            </h2>
          )}

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handelInputChange("username", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handelInputChange("email", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Phone no:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handelInputChange("phone", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">State:</label>
            <select
              value={formData.state}
              onChange={(e) => handelInputChange("state", e.target.value)}
            >
              <option value="">--Select your state--</option>
              {State.getStatesOfCountry("IN").map((state) => (
                <option>{state.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="email">Country:</label>
            <select
              value={formData.country}
              onChange={(e) => handelInputChange("country", e.target.value)}
            >
              <option value="">--Select your country--</option>
              <option>India</option>
            </select>
          </div>
          <div>
            <label htmlFor="email">Street:</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={(e) => handelInputChange("street", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) => handelInputChange("city", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Pincode:</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={(e) => handelInputChange("pincode", e.target.value)}
            />
          </div>

          <div className="userprofile-button">
            <Button onClick={closeModal}>Cancel</Button>
            {/* Todo when submit go to user profile page */}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetailsUpdateForm;
