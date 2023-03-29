import styled from "styled-components";

const LettersList = ({ setLetter }) => {
  const handleClick = (event) => {
    setLetter(event.target.innerText);
  };

  return (
    <>
      <Wrapper>
        <LettersText onClick={handleClick}>A</LettersText>
        <LettersText onClick={handleClick}>B</LettersText>
        <LettersText onClick={handleClick}>C</LettersText>
        <LettersText onClick={handleClick}>D</LettersText>
        <LettersText onClick={handleClick}>E</LettersText>
        <LettersText onClick={handleClick}>F</LettersText>
        <LettersText onClick={handleClick}>G</LettersText>
        <LettersText onClick={handleClick}>H</LettersText>
        <LettersText onClick={handleClick}>I</LettersText>
        <LettersText onClick={handleClick}>J</LettersText>
        <LettersText onClick={handleClick}>K</LettersText>
        <LettersText onClick={handleClick}>L</LettersText>
        <LettersText onClick={handleClick}>M</LettersText>
        <LettersText onClick={handleClick}>N</LettersText>
        <LettersText onClick={handleClick}>O</LettersText>
        <LettersText onClick={handleClick}>P</LettersText>
        <LettersText onClick={handleClick}>Q</LettersText>
        <LettersText onClick={handleClick}>R</LettersText>
        <LettersText onClick={handleClick}>S</LettersText>
        <LettersText onClick={handleClick}>T</LettersText>
        <LettersText onClick={handleClick}>U</LettersText>
        <LettersText onClick={handleClick}>V</LettersText>
        <LettersText onClick={handleClick}>W</LettersText>
        <LettersText onClick={handleClick}>X</LettersText>
        <LettersText onClick={handleClick}>Y</LettersText>
        <LettersText onClick={handleClick}>Z</LettersText>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LettersText = styled.h3``;

export default LettersList;
