import { COLORS } from "../global/constants";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import LoginButton from "../auth0/LoginButton";
import LogoutButton from "../auth0/LogoutButton";
import Profile from "../auth0/Profile";
import Scribble from "./Scribble";
import HeaderScribble from "../images/HeaderScribble";

import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../auth0/CurrentUserContext";
import { useState } from "react";

const Header = () => {
  const { isLoading, error } = useAuth0;
  const { account } = useContext(UserContext);
  const [image, setImage] = useState();
  console.log(image);

  const handleClick = (event) => {
    setImage(event.target.innerText);
  };

  const handleHome = () => {
    setImage(null);
  };

  return (
    <Wrapper>
      {error && <span>Authentication Error</span>}
      {!error && isLoading && <span>Loading....</span>}
      {!error && !isLoading && (
        <>
          {!account ? (
            <>
              <SignInDiv>
                {/* <SignInSpan>Click here to sign in →</SignInSpan> */}
                <LoginButton />
              </SignInDiv>
            </>
          ) : (
            <>
              <Profile />
            </>
          )}
          <MainRow>
            <SuoniLink to="/" onClick={handleHome}>
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
            <Scribble image={image} setImage={setImage} />
          </MainRow>
          <BottomRow>
            <Links>
              <StyledLink to="/years">
                <H2 onClick={handleClick}>Year</H2>
              </StyledLink>
              <StyledLink to="/artists" onClick={handleClick}>
                <H2>Artists</H2>
              </StyledLink>
              <StyledLink to="/venues" onClick={handleClick}>
                <H2>Venues</H2>
              </StyledLink>
              <StyledLink to="/workshops" onClick={handleClick}>
                <H2>Workshops</H2>
              </StyledLink>
            </Links>
            <SearchBar />
          </BottomRow>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: -20px; */
`;

const SignInDiv = styled.div`
  align-self: flex-end;
`;

const SignInSpan = styled.span`
  font-size: 1.25em;
`;

const MainRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: -50px;
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
    color: ${COLORS.red};
    text-shadow: 1px 2px 0px ${COLORS.blue};
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

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img``;

export default Header;
