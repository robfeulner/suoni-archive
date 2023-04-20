import styled from "styled-components";
import { useState, useEffect } from "react";
import YearList from "./YearList";
import Loading from "../global/Loading";
import { Link } from "react-router-dom";
import moment from "moment";

const Year = () => {
  const [year, setYear] = useState(null);
  const [artists, setArtists] = useState(null);

  //Indexing for pagination
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * 15;
  const endIndex = startIndex + 15;

  //GET all events
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        setArtists(data.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      {!artists ? (
        <Loading />
      ) : (
        <>
          <Wrapper>
            {year ? (
              <EventWrapper>
                <YearH1>{year}</YearH1>
                {/* Filter events by year */}
                {artists
                  .filter((event) => event.year === year)
                  // Map all events for that year, with slice for pagination
                  .map((event) =>
                    event.events.slice(startIndex, endIndex).map((event) => (
                      <div key={event._id}>
                        <EventLink to={`/events/${event._id}`}>
                          <EventH2>{event.artist.join(" + ")}</EventH2>
                        </EventLink>
                        <P>{moment(event.date).format("MMMM Do YYYY")}</P>
                        <P>{event.venue}</P>
                        <P>{event.price}</P>
                      </div>
                    ))
                  )}
              </EventWrapper>
            ) : (
              <>
                <ChooseWrapper>
                  <ChooseSpan>Choose a year</ChooseSpan>
                </ChooseWrapper>
              </>
            )}
            <RightWrapper>
              {/* Pagination begins */}
              {!year ? (
                <></>
              ) : (
                <PageDiv>
                  <Button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous Page
                  </Button>
                  <Span>{page}</Span>
                  <Button
                    disabled={
                      endIndex >=
                      artists
                        .filter((event) => event.year === year)
                        .map((event) => event.events)[0].length
                    }
                    onClick={() => setPage(page + 1)}
                  >
                    Next Page
                  </Button>
                </PageDiv>
              )}
              {/* Pagination ends */}
              <YearList
                year={year}
                setYear={setYear}
                artists={artists}
                setPage={setPage}
              />
            </RightWrapper>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35px;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearH1 = styled.h1`
  font-size: 3em;
  margin-left: 30px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 30%;
`;

const PageDiv = styled.div``;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
  font-size: 1em;
  font-weight: bold;
  font-style: italic;

  &:disabled {
    color: grey;
    text-decoration: line-through;
  }
`;

const Span = styled.span`
  color: blue;
  font-size: 2em;
  font-weight: bold;
`;

const ChooseWrapper = styled.div`
  margin-left: 30px;
`;
const ChooseSpan = styled.span`
  font-size: 2em;
  color: black;
  font-weight: bold;
`;

const EventLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: blue;
  }
`;

const EventH2 = styled.h2`
  margin-bottom: -20px;
`;

const P = styled.p`
  font-size: 1.5em;
`;

export default Year;
