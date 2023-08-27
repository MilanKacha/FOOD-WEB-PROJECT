import "../../style/userdetailsupdateform.css";
import Button from "../../ui/Button";
import { Country, State } from "country-state-city";

const UserDetailsUpdateForm = ({ closeModal }) => {
  return (
    <>
      <div className="updateprofile">
        <form
        //   onSubmit={handleSubmit}
        >
          <h2 style={{ color: "black" }} className="updateform-heading">
            Update Your Profile
          </h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              // value={formData.name}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Phone no:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">State:</label>
            <select>
              {State.getStatesOfCountry("IN").map((state) => (
                <option>{state.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="email">Country:</label>
            <select>
              {Country.getAllCountries().map((country) => (
                <option>{country.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="email">Street:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">City:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Pincode:</label>
            <input
              type="email"
              id="email"
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}
            />
          </div>

          <div className="userprofile-button">
            <Button onClick={closeModal}>Cancel</Button>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserDetailsUpdateForm;
