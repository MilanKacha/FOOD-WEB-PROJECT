import "../../../style/userdetails.css";

import Button from "../../../ui/Button";
import { useEffect, useState } from "react";
import ModalCommon from "../../../ui/ModalCommon";
import UserDetailsUpdateForm from "./UserDetailsUpdateForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoggedInUserAsync, selectUserInfo } from "../userSlice";

const UserDetails = () => {
  const [updateformOpen, setUpdateformOpen] = useState(false);

  const user = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchLoggedInUserAsync();
  }, [dispatch]);
  console.log(user);

  const openModal = () => {
    setUpdateformOpen(true);
  };

  const closeModal = () => {
    setUpdateformOpen(false);
  };
  const Profile = `https://res.cloudinary.com/dkaenszh3/image/upload/v1696311898/11111111111_fq8byx.jpg`;

  return (
    <>
      <div className="userdetails">
        <div className="userdetails-wrapper">
          <div className="profile-img">
            <img src={Profile} alt="" />
          </div>
          <div className="userdetails-content">
            {user && (
              <>
                <span className="username">Name: {user.username}</span>
                <span className="useremail">Email: {user.email}</span>
                <span className="userphone">Mo: {user.phone}</span>
                <span className="userstreet">Street: {user.street}</span>
                <span className="usercity">City: {user.city}</span>
                <span className="userpincode">Pincode: {user.pincode}</span>
                <span className="userstate">State: {user.state}</span>
                <span className="usercountry">Country: {user.country}</span>
              </>
            )}

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
