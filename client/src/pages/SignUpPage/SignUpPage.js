import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from "../../redux/user/userSelectors";
import SignUpCard from "../../components/SignUpCard/SignUpCard";
import ReactGa from "react-ga";
const SignUpPage = ({ currentUser }) => {
  const history = useHistory();
  useEffect(() => {
    if (currentUser) history.push("/");
  }, [currentUser, history]);
  return (
    // <main className="sign-up-page">
    //   <div className="login-page__showcase"></div>
    <main data-test="page-login" className="login-page">
      <div className="login-page__showcase"></div>
      <SignUpCard />
    </main>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignUpPage);
