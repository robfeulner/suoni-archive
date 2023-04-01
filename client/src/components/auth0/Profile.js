import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import { useState, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Wrapper>
      {user?.name && <Span>Hello, {user?.nickname}!</Span>}
      {user?.picture && <Img src={user.picture} alt={user?.name} />}
      <CustomLogoutButton />
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Span = styled.span`
  font-size: 1.5em;
`;

const Img = styled.img`
  height: 40px;
  border-radius: 50%;
`;

const CustomLogoutButton = styled(LogoutButton)`
  background-color: red;
  font-weight: bold;
  border: none;
`;

export default Profile;
