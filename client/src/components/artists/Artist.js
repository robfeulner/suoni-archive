import Loading from "../global/Loading";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

const Artist = () => {
  const [artists, setArtists] = useState(null);
  const { artistId } = useParams();

  //This page lists all the events performed by a single artist

  //GET events from server
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
  }, []);

  return (
    <>
      {!artists ? (
        <Loading />
      ) : (
        <Wrapper>
          <LeftWrapper>
            <ArtistWrapper>
              <ArtistH1>{artistId}</ArtistH1>
            </ArtistWrapper>

            {/* Filter artist name from event list, map artist info */}

            {artists
              .filter((artist) =>
                artist.events.some((event) => event.artist.includes(artistId))
              )
              .map((artist) =>
                artist.events
                  .filter((event) => event.artist.includes(artistId))
                  .map((event) => (
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
          </LeftWrapper>
          <RightWrapper>
            <img src="/images/artistscribble01.png" alt="scribble" />
          </RightWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin-left: 35px;
  display: flex;
  justify-content: space-between;
`;

const LeftWrapper = styled.div``;

const ArtistH1 = styled.h1`
  font-size: 3em;
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

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.p`
  margin: auto 0;
`;

export default Artist;
