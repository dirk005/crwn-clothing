import React, { useState } from "react";

import "./sign-in.style.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ isGoogleSignIn, googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setCredentials({ email: "", password: "" });
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="E-mail"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignIn={isGoogleSignIn}
            type="button"
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(null, mapDispatchToProps)(SignIn);
