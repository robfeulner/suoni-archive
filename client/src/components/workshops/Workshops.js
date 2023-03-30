import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YearList from "../year/YearList";

const Workshops = () => {
  const [artists, setArtists] = useState(null);
  const [year, setYear] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/get-workshops`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        setArtists(data.data);
        console.log(artists);
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
        <>
          <Wrapper>
            <ArtistWrapper>
              {console.log(artists)}
              {artists
                .filter((event) => event.year === year)
                .map((event) =>
                  event.events.map((event) => (
                    <div key={event._id}>
                      <Link to={`/workshops/${event._id}`}>
                        <h3>{event.name}</h3>
                      </Link>
                      <p>{event.date}</p>
                      <p>{event.venue}</p>
                      <p>{event.description}</p>
                    </div>
                  ))
                )}
            </ArtistWrapper>
            <YearList artists={artists} setYear={setYear} setPage={setPage} />
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Workshops;
