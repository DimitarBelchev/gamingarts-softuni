import React, { Fragment } from "react";
import Icon from "../../components/Icon/Icon";
import NewPostButton from "../../components/NewPost/NewPostButton/NewPostButton";
import TextButton from "../../components/Button/TextButton/TextButton";
const EmptyProfile = ({ currentUserProfile, username }) => (
  <div className="profile-empty">
    <Icon icon="camera-outline" className="icon--larger" />
    {currentUserProfile ? (
      <Fragment>
        <h1 className="heading-1 font-thin">Share Images</h1>
        <h3 className="heading-3 font-medium">
          When you share images, they will appear on your profile.
        </h3>
        <NewPostButton style={{ width: "auto" }}>
          <TextButton bold blue medium style={{ pointerEvents: "none" }}>
            Share your first image
          </TextButton>
        </NewPostButton>
      </Fragment>
    ) : (
      <Fragment>
        <h1 className="heading-1 font-thin">No Posts Yet</h1>
        <h3 className="heading-3 font-medium">
          When {username} posts, you'll see their images here.
        </h3>
      </Fragment>
    )}
  </div>
);

export default EmptyProfile;
