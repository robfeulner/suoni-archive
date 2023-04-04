import { COLORS } from "../global/constants";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <H1Top>FREEDOM,</H1Top>
        <H1Bottom>NOT MUSIC</H1Bottom>
      </Header>
      <InfoDiv>
        <P>
          Located in Montreal, Quebec, Suoni Per Il Popolo has been a leading
          festival of the avant-garde arts since the year 2000. Every June the
          festival showcases underground experimental performers from genres
          such as free jazz, noise, drone, avant-folk, art-rock, electronics,
          and more. This archive of past performances is not just a love letter
          to Suoni, but an annual snapshot of the experimental music scene.
          You're encouraged to share photos, posters, videos, and memories in
          the comments sections.
        </P>
        <PBold>
          The archive is unofficial and not sanctioned nor endorsed by Suoni Per
          Il Popolo, Casa Del Popolo, or any related entities.
        </PBold>
        <P>
          Suoni Per Il Popolo is an ongoing festival, please check out their
          upcoming events and give them your support at their
          <StyledLink to="http://suoniperilpopolo.org" target="_blank">
            official website.
          </StyledLink>
        </P>
        <UpdateDiv>
          <P>
            Update: April 11th 2023: Soft launch complete. All shows for 2006
            and 2010 are listed, with partial data for 2007-2009 done. More to
            come! - 🧡 Rob
          </P>
        </UpdateDiv>
      </InfoDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Header = styled.div`
  min-width: 50%;
  margin-left: 55px;
`;

const H1Top = styled.h1`
  font-size: 9em;
  color: ${COLORS.red};

  text-shadow: 10px 6px 0px ${COLORS.blue};
`;

const H1Bottom = styled.h1`
  font-size: 9em;
  margin-top: -100px;
  text-shadow: 6px 6px 0px #ea0000;
`;

const InfoDiv = styled.div`
  max-width: 50%;
`;

const P = styled.p`
  font-size: 1.25em;
  text-align: right;
`;

const PBold = styled.p`
  font-size: 1.25em;
  text-align: right;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: black;
  margin-left: 0.3em;
  margin-right: 0;
  &:visited {
    color: black;
  }
`;

const UpdateDiv = styled.div`
  margin-top: 60px;
`;

export default Home;
