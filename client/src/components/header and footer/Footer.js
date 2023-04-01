import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <SuoniDiv>
        <Suoni>SUONI</Suoni>
        <PerIl>PER IL</PerIl>

        <Popolo>POPOLO</Popolo>
        <Archive>ARCHIVE</Archive>
      </SuoniDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
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

export default Footer;
