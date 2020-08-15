import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import NewPost from "../../components/NewPost/NewPost";
import ReactGa from "react-ga";
const NewPostPage = ({ location }) => {
  const history = useHistory();
  return location.state && location.state.file ? (
    <NewPost file={location.state.file} hide={() => history.push("/")} />
  ) : (
    <Redirect to="/" />
  );
};

export default NewPostPage;
