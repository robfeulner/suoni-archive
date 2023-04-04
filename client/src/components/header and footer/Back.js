import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Back = () => {
  const path = useLocation();
  return (
    <Wrapper>
      {path.pathname !== "/" && (
        <BackLink to="#" onClick={() => window.history.back()}>
          <BackP>← Back</BackP>
        </BackLink>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
margin: -50px 0 0 55px;
`

const BackLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: red;
  }
`;

const BackP = styled.p`
  font-size: 1.5em;
  color: red;
`;

export default Back;
