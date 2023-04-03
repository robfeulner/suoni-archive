import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <Button onClick={() => loginWithRedirect()}>
          Click here to sign in
        </Button>
      </>
    )
  );
};

const Button = styled.button`
  background-color: transparent;
  font-size: 1.5em;
  border-radius: 20px;
  padding: 3px 10px;
  border: 2px blue solid;
  cursor: pointer;
`;

export default LoginButton;
