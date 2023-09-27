import "../../../style/userdetails.css";
import Profile from "../../../assests/userdetails/profile.jfif";
import Button from "../../../ui/Button";
import { useState } from "react";
import ModalCommon from "../../../ui/ModalCommon";
import UserDetailsUpdateForm from "./UserDetailsUpdateForm";
import { useDispatch } from "react-redux";
import { updateUserAsync } from "../userSlice";

const UserDetails = () => {
  const [updateformOpen, setUpdateformOpen] = useState(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setUpdateformOpen(true);
  };

  const closeModal = () => {
    setUpdateformOpen(false);
  };

  //Todo  for update form data
  // const handleUpdateProfile = () => {
  //   dispatch(updateUserAsync());
  // };

  return (
    <>
      <div className="userdetails">
        <div className="userdetails-wrapper">
          <div className="profile-img">
            <img src={Profile} alt="" />
          </div>
          <div className="userdetails-content">
            <span className="username">Name: Milan Kacha</span>
            <span className="useremail">Email: kachamilan108@gmail.com</span>
            <span className="userphone">Mo: 8758509206</span>
            <span className="userstreet">Street: Shakar</span>
            <span className="usercity">City: Bangalore</span>
            <span className="userpincode">Pincode: 360002</span>
            <span className="userstate">State: Gujarat</span>
            <span className="usercountry">Country: India</span>
            <Button onClick={openModal}>Edit Profile</Button>
          </div>
        </div>
      </div>

      {updateformOpen && (
        <ModalCommon openModal={openModal} closeModal={closeModal}>
          <UserDetailsUpdateForm closeModal={closeModal} />
        </ModalCommon>
      )}
    </>
  );
};

export default UserDetails;
