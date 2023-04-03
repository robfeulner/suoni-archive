import styled from "styled-components";

const Scribble = ({ image, setImage }) => {
  return (
    <>
      <ScribbleDiv>
        {!image && <Img src="/images/scribble10.png" alt="scribble" />}
        {image === "Year" && (
          <Img src="/images/scribble09.png" alt="scribble" />
        )}
        {image === "Artists" && (
          <Img src="/images/scribble11.png" alt="scribble" />
        )}
        {image === "Venues" && (
          <Img src="/images/scribble08.png" alt="scribble" />
        )}
        {image === "Workshops" && (
          <Img src="/images/scribble07.png" alt="scribble" />
        )}
      </ScribbleDiv>
    </>
  );
};

const ScribbleDiv = styled.div``;

const Img = styled.img``;

export default Scribble;
