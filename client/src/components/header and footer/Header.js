import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <h1>SUONI PER IL POPOLO</h1>
      <Links>
        <Link to="/years">
          <h2>Year</h2>
        </Link>
        <Link to="/artists">
          <h2>Artists</h2>
        </Link>
        <Link to="/venues">
          <h2>Venues</h2>
        </Link>
        <Link to="">
          <h2>Workshops</h2>
        </Link>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
`;

export default Header;
