import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Venues = () => {
  const [venueRoute, setVenueRoute] = useState(null);
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    fetch(`/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }
        console.log(data.data);
        const venueNames = data.data.flatMap((year) =>
          year.events.map((event) => event.venue)
        );
        const uniqueVenues = [...new Set(venueNames)];
        const sortedUniqueVenues = uniqueVenues.sort();

        setVenue(sortedUniqueVenues);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!venue ? (
        <></>
      ) : (
        <>
          <Wrapper>
            <ArtistWrapper>
              {venue.map((name) => (
                <div>
                  <Link to={`/venues/${name}`}>{name}</Link>
                </div>
              ))}
            </ArtistWrapper>
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

export default Venues;
