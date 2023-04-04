import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import { useState, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <Wrapper>
      <DivTop>
        {user?.name && (
          <Span>
            Hello, {user?.nickname}!
            {user.email === "kennedycurse@gmail.com" ? <>✨</> : <></>}
          </Span>
        )}
        {user?.picture && <Img src={user.picture} alt={user?.name} />}
      </DivTop>
      <DivBottom>
        <LogoutButton />
      </DivBottom>
    </Wrapper>
  ) : (
    <></>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

const DivTop = styled.div`
display: flex;
align-items: center;
`;

const DivBottom = styled.div`
margin-top: -15px;
`;

const Span = styled.span`
  font-size: 1.5em;
`;

const Img = styled.img`
  height: 40px;
  border-radius: 50%;
  margin-left: -5px;
`;

export default Profile;
