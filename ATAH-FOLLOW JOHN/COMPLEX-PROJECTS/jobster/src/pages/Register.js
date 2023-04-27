import { useState, useEffect } from "react";
import { FormRow, Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../feature/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, password, email, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      toast.warning("Please fill out all fields");
      return;
    }

    if (values.isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }

    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "register"}</h3>

        {!values.isMember && (
          <FormRow
            labelText="name"
            type="text"
            name="name"
            handleChange={handleChange}
            value={values.name}
          />
        )}

        <FormRow
          labelText="email"
          type="email"
          name="email"
          handleChange={handleChange}
          value={values.email}
        />

        <FormRow
          labelText="password"
          type="password"
          name="password"
          handleChange={handleChange}
          value={values.password}
        />

        <button className="btn btn-block" type="submit">
          submit
        </button>

        <p>
          {values.isMember ? "Not member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
