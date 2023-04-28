import { useState } from "react";
import { FormRow } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../feature/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setuserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    location: user?.location || "",
    lastName: user?.lastName || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location, lastName } = userData;

    if (!name || !email || !location || !lastName) {
      toast.warning("Please Fill Out All Fields");
      return;
    }

    console.log(userData);
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>

        <div className="form-center">
          <FormRow
            value={userData.name}
            labelText="Name"
            handleChange={handleChange}
            type="text"
            name="name"
          />
          <FormRow
            value={userData.email}
            labelText="email"
            handleChange={handleChange}
            type="email"
            name="email"
          />
          <FormRow
            value={userData.location}
            labelText="Location"
            handleChange={handleChange}
            type="text"
            name="location"
          />
          <FormRow
            value={userData.lastName}
            labelText="last name"
            handleChange={handleChange}
            type="text"
            name="lastName"
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
