import styled from "styled-components";
import { COLORS } from "../global/constants";

import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <Button onClick={() => logout()}>Sign Out</Button>
      </>
    )
  );
};

const Button = styled.button`
  background-color: transparent;
  font-size: 1.25em;
  border-radius: 20px;
  padding: 3px 10px;
  border: 2px ${COLORS.blue} solid;
  cursor: pointer;
  z-index: 100;
  transform: translateX(1px);

  &:hover {
    color: ${COLORS.red};
    text-shadow: 2px 4px 0px ${COLORS.blue};
    border: 2px black solid;
  }
`;

export default LogoutButton;
