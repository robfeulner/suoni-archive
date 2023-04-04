import styled from "styled-components";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <SuoniDiv>
        <Suoni>SUONI</Suoni>
        <PerIl>PER IL</PerIl>

        <Popolo>POPOLO</Popolo>
        <Archive>ARCHIVE</Archive>
      </SuoniDiv>
      <div>
        <img src="/images/footerscribble01.png" alt="footer scribble" />
      </div>
      <IconDiv>
        <LinkStyled to="https://github.com/robfeulner" target="_blank">
          <AiFillGithubStyled />
        </LinkStyled>
        <LinkStyled to="http://robfeulner.com" target="_blank">
          <Img src="/images/bleunuitvideo03.png" alt="Bleu Nuit Video" />
        </LinkStyled>
        <LinkStyled to="mailto:kenendycurse@gmail.com" target="_blank">
          <AiOutlineMailStyled />
        </LinkStyled>
      </IconDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 50px;
`;

const SuoniDiv = styled.div``;

const Suoni = styled.h2`
  /* position: absolute; */
  height: 36.39px;
  top: 28px;

  /* font-family: "Hammersmith One"; */

  font-weight: 400;
  font-size: 48px;
  line-height: 60px;

  color: #00519c;

  text-shadow: 3px 1px 0px #ea0000;
`;

const PerIl = styled.h2`
  /* position: absolute; */
  width: 27.83px;
  height: 23.05px;
  margin-left: 130px;

  /* font-family: "Hammersmith One"; */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 5px;

  color: #00519c;

  text-shadow: 2px 2px 0px #ea0000;
`;

const Popolo = styled.h2`
  /* position: absolute; */
  height: 11.52px;
  margin-top: -5px;

  /* font-family: "Hammersmith One"; */
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 0px;
  /* or 35% */

  color: #00519c;

  text-shadow: 4px 1px 0px #ea0000;
`;

const Archive = styled.h2`
  /* position: relative */
  margin-top: -30px;
  /* font-family: "Hammersmith One"; */
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.71em;

  color: #000000;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }
`;

const AiFillGithubStyled = styled(AiFillGithub)`
  font-size: 4em;
`;

const AiOutlineMailStyled = styled(AiOutlineMail)`
  font-size: 4em;
`;
const Img = styled.img``;

export default Footer;
