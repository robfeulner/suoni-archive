import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YearList from "../year/YearList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Venue = () => {
  const { venueId } = useParams();
  const [artists, setArtists] = useState(null);
  const [year, setYear] = useState(null);

  //No pagination on Venue but required for YearList
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`/get-events`)
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
  }, []);

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <Wrapper>
          {year ? (
            <EventWrapper>
              <VenueH1>{venueId}</VenueH1>
              {/* Filtering by year */}
              {artists
                .filter((event) => event.year === year)
                // Matching to venue
                .filter((artist) =>
                  artist.events.some((event) => event.venue === venueId)
                )
                // Mapping all performance in that venue, in that year
                .map((artist) =>
                  artist.events
                    .filter((event) => event.venue === venueId)

                    .map((event) => (
                      <div key={event._id}>
                        <EventLink to={`/events/${event._id}`}>
                          <EventH2>{event.artist.join(" + ")}</EventH2>
                        </EventLink>
                        <P>{event.date}</P>
                        <P>{event.venue}</P>
                        <P>{event.price}</P>
                      </div>
                    ))
                )}
              {artists
                .filter((event) => event.year === year)
                .filter((artist) =>
                  artist.events.some((event) => event.venue === venueId)
                ).length === 0 && (
                <EventWrapper center>
                  <H1>No events found in {year}</H1>
                </EventWrapper>
              )}
            </EventWrapper>
          ) : (
            <>
              <ChooseWrapper>
                <VenueH1>{venueId}</VenueH1>
                <ChooseSpan>Choose a year</ChooseSpan>
              </ChooseWrapper>
            </>
          )}
          <RightWrapper>
            <YearList
              artists={artists}
              year={year}
              setYear={setYear}
              setPage={setPage}
            />
          </RightWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VenueH1 = styled.h1`
  font-size: 3em;
  margin-left: 30px;
`;

const H1 = styled.h1`
  color: black;
  font-style: italic;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 30%;
`;

const ChooseWrapper = styled.div`
  margin-left: 30px;
`;
const ChooseSpan = styled.span`
  font-size: 2em;
  color: black;
  font-weight: bold;
  margin-left: 30px;
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

export default Venue;
