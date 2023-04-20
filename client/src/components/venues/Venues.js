import Loading from "../global/Loading";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Venues = () => {
  const [venue, setVenue] = useState(null);

  //GET complete list of unique venues from data

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }

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
        <Loading />
      ) : (
        <>
          <Wrapper>
            <LeftWrapper>
              {/* Listing venues */}
              <ArtistWrapper>
                {venue.map((name) => (
                  <div>
                    <VenueLink to={`/venues/${name}`}>
                      <VenueH2>{name}</VenueH2>
                    </VenueLink>
                  </div>
                ))}
              </ArtistWrapper>
            </LeftWrapper>
            {/* Scribble */}
            <RightWrapper>
              <img src="/images/scribble12.png" alt="scribble" />
            </RightWrapper>
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-left: 35px;
  justify-content: space-between;
`;

const LeftWrapper = styled.div``;

const RightWrapper = styled.div`
  margin: auto 0;
`;

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const VenueLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: blue;
  }
`;

const VenueH2 = styled.h2`
  margin-bottom: -20px;
`;

export default Venues;
