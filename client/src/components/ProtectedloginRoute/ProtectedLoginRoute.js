import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Redirect } from "react-router-dom";
import { selectToken } from "../../redux/user/userSelectors";
const ProtectedLoginRoute = ({ token, children, ...props }) => {
  return <Route {...props}>{!token ? children : <Redirect to="/" />}</Route>;
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

export default connect(mapStateToProps)(ProtectedLoginRoute);
