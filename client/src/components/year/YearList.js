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
            {artists
              .filter((years) => years.year)
              .map((years) => (
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

const YearText = styled.h3``;

export default YearList;
