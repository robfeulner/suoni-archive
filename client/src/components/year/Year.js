import styled from "styled-components";
import { useState, useEffect } from "react";
import YearList from "./YearList";
import { Link } from "react-router-dom";

const Year = () => {
  const [year, setYear] = useState(null);
  const [artists, setArtists] = useState(null);

  //Indexing for pagination
  const [page, setPage] = useState(1);
  const startIndex = (page - 1) * 25;
  const endIndex = startIndex + 25;

  useEffect(() => {
    fetch(`/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        setArtists(data.data);
        // console.log(artists);
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
        <>
          <Wrapper>
            <EventWrapper>
              {artists
                .filter((event) => event.year === year)

                .map((event) =>
                  event.events.slice(startIndex, endIndex).map((event) => (
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
            <div>
              {/* <button onClick={() => setPage(1)}>Page 1</button> */}
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous Page
              </button>
              {page}
              <button
                disabled={endIndex >= artists[0].events.length}
                onClick={() => setPage(page + 1)}
              >
                Next Page
              </button>
            </div>
            <YearList
              year={year}
              setYear={setYear}
              artists={artists}
              setPage={setPage}
            />
          </Wrapper>
        </>
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

export default Year;
