import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YearList from "../year/YearList";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Venue = () => {
  const { venueId } = useParams();
  const [artists, setArtists] = useState(null);
  const [year, setYear] = useState(null);
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
  }, [page]);

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <Wrapper>
          <EventWrapper>
            <h1>{venueId}</h1>
            {artists
              .filter((event) => event.year === year)
              .filter((artist) =>
                artist.events.some((event) => event.venue === venueId)
              )
              .map((artist) =>
                artist.events
                  .filter((event) => event.venue === venueId)

                  .map((event) => (
                    <div key={event._id}>
                      <Link to={`/events/${event._id}`}>
                        <h3>{event.artist.join(" + ")}</h3>
                      </Link>
                      <p>{event.date}</p>
                      <p>{event.venue}</p>
                      <p>{event.price}</p>
                    </div>
                  ))
              )}
          </EventWrapper>
          <YearList
            artists={artists}
            year={year}
            setYear={setYear}
            setPage={setPage}
          />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Venue;
