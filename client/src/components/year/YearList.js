import styled from "styled-components";

const YearList = ({ year, setYear, artists, setPage }) => {
  const handleClick = (event) => {
    setYear(parseInt(event.target.innerText));
    setPage(1);
  };

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <>
          <Wrapper>
            {artists.map((years) => (
              <div key={years._id}>
                <YearText onClick={handleClick}>{years.year}</YearText>
              </div>
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearText = styled.h1`
  text-shadow: 1px 2px 0px #ea0000;

  &:hover {
    color: red;
    text-shadow: 1px 2px 0px blue;
  }
`;

export default YearList;
