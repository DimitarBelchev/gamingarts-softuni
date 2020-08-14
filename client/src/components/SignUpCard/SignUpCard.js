import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpStart } from "../../redux/user/userActions";
import { selectError, selectFetching } from "../../redux/user/userSelectors";
import {
  validateEmail,
  validateFullName,
  validateUsername,
  validatePassword,
} from "../../utils/validation";
import Button from "../Button/Button";
import TextButton from "../Button/TextButton/TextButton";
import Card from "../Card/Card";
import FormInput from "../FormInput/FormInput";

const SignUpCard = ({ signUpStart, error, fetching, modal }) => {
  const validate = (values) => {
    const errors = {};
    const emailError = validateEmail(values.email);
    if (emailError) errors.email = emailError;

    const fullNameError = validateFullName(values.fullName);
    if (fullNameError) errors.fullName = fullNameError;

    const usernameError = validateUsername(values.username);
    if (usernameError) errors.username = usernameError;

    const passwordError = validatePassword(values.password);
    if (passwordError) errors.password = passwordError;
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) =>
      signUpStart(
        values.email,
        values.fullName,
        values.username,
        values.password
      ),
  });

  return (
    <Fragment>
      <div
        className="login-card-container"
        style={
          modal
            ? {
                padding: "2rem",
              }
            : {}
        }
      >
        <Card className="form-card">
          <h1 className="heading-logo text-center">GamingArts</h1>
          <h2
            style={{ fontSize: "1.7rem" }}
            className="heading-2 color- text-center"
          >
            Gaming is art.
          </h2>
          <form className="form-card__form" onSubmit={formik.handleSubmit}>
            <FormInput
              name="email"
              fieldProps={formik.getFieldProps("email")}
              valid={formik.touched.email && !formik.errors.email}
              placeholder="Email address"
            />
            <FormInput
              name="fullName"
              fieldProps={formik.getFieldProps("fullName")}
              valid={formik.touched.fullName && !formik.errors.fullName}
              placeholder="Full Name"
            />
            <FormInput
              name="username"
              fieldProps={formik.getFieldProps("username")}
              valid={formik.touched.username && !formik.errors.username}
              placeholder="Username"
            />
            <FormInput
              name="password"
              fieldProps={formik.getFieldProps("password")}
              placeholder="Password."
              valid={formik.touched.password && !formik.errors.password}
              type="password"
            />
            <p className="heading-5 color-grey">
              8 characters minimum. Use symbols, numbers, uppecase and lowercase
              letters to stay safe. :)
            </p>
            <Button
              loading={fetching}
              disabled={
                Object.keys(formik.touched).length === 0
                  ? true
                  : !formik.isValid
              }
            >
              Sign Up
            </Button>
            <p></p>
          </form>
          <p className="error">
            {error
              ? error
              : formik.submitCount > 0 && Object.values(formik.errors)[0]}
          </p>
          <p className="heading-5 color-grey">
            Sign up now to express your love for your favorite medium
          </p>
        </Card>
        <Card>
          <section
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <h4 style={{ marginRight: "5px" }} className="heading-4 font-thin">
              Already have an account?
            </h4>
            <Link to="/login">
              <TextButton medium blue bold>
                Log in
              </TextButton>
            </Link>
          </section>
        </Card>
      </div>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, fullName, username, password) =>
    dispatch(signUpStart(email, fullName, username, password)),
});

const mapStateToProps = createStructuredSelector({
  error: selectError,
  fetching: selectFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpCard);
