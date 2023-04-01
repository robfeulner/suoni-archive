import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import Profile from "../auth0/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { isLoading, error } = useAuth0;
  return (
    <Wrapper>
      {/* <LoginButton />
      <LogoutButton /> */}
      {error && <span>Authentication Error</span>}
      {!error && isLoading && <span>Loading....</span>}
      {!error && !isLoading && (
        <>
          <Profile />

          <SuoniLink to="/">
            <SuoniWrapper>
              <SuoniWrapper2>
                <Suoni>SUONI</Suoni>
                <SuoniColumn>
                  <PerIl>PER</PerIl>
                  <PerIl>I L</PerIl>
                </SuoniColumn>
              </SuoniWrapper2>
              <SuoniWrapper3>
                <Popolo>POPOLO</Popolo>
              </SuoniWrapper3>
              <P>ARCHIVE</P>
            </SuoniWrapper>
          </SuoniLink>

          <Links>
            <StyledLink to="/years">
              <H2>Year</H2>
            </StyledLink>
            <StyledLink to="/artists">
              <H2>Artists</H2>
            </StyledLink>
            <StyledLink to="/venues">
              <H2>Venues</H2>
            </StyledLink>
            <StyledLink to="/workshops">
              <H2>Workshops</H2>
            </StyledLink>
          </Links>

          <SearchBar />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuoniWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SuoniWrapper2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SuoniWrapper3 = styled.div``;

const Suoni = styled.h1`
  font-size: 6em;
  line-height: 0px;
  text-shadow: 2px 4px 0px #ea0000;
`;
const SuoniColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const PerIl = styled.h2`
  font-size: 2em;
  line-height: 20px;
  text-shadow: 2px 4px 0px #ea0000;
  margin-left: -10px;
`;

const Popolo = styled.h1`
  font-size: 4.5em;
  line-height: 10px;
  text-shadow: 2px 4px 0px #ea0000;
`;

const P = styled.p`
  color: black;
  font-size: 3em;
  font-weight: bold;
  margin-left: 30px;
  letter-spacing: 15px;
  margin-top: 15px;
`;

const Links = styled.div`
  display: flex;
  margin-left: 35px;
`;

const H2 = styled.h2`
  text-shadow: 1px 2px 0px #ea0000;

  &:hover {
    color: red;
    text-shadow: 1px 2px 0px blue;
  }
`;

const SuoniLink = styled(NavLink)`
  text-decoration: none;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
`;

export default Header;
