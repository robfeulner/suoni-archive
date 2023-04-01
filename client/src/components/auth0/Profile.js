import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import { useState, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <>
        <article>
          {user?.name && <span>Hello {user?.name}!</span>}
          {user?.picture && <Img src={user.picture} alt={user?.name} />}
        </article>
      </>
    )
  );
};

const Img = styled.img`
  height: 60px;
  border-radius: 50%;
`;

export default Profile;
