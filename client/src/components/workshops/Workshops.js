import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import YearList from "../year/YearList";
import moment from "moment";
import Loading from "../global/Loading";

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
        <Loading/>
      ) : (
        <>
          <Wrapper>
            {year ? (
              <ArtistWrapper>
                <YearH1>{year}</YearH1>
                
                {artists
                  .filter((event) => event.year === year)
                  .map((event) =>
                    event.events.map((event) => (
                      <div key={event._id}>
                        <EventLink to={`/workshops/${event._id}`}>
                          <EventH2>{event.name}</EventH2>
                        </EventLink>
                        <P>{moment(event.date).format("MMMM Do YYYY")}</P>
                        <P>{event.venue}</P>
                        <P>{event.description}</P>
                      </div>
                    ))
                  )}
              </ArtistWrapper>
            ) : (
              <>
                <ChooseWrapper>
                  <ChooseSpan>Choose a year</ChooseSpan>
                </ChooseWrapper>
              </>
            )}
            <RightWrapper>
              <YearList artists={artists} setYear={setYear} setPage={setPage} />
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
`;

const ArtistWrapper = styled.div`
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

export default Workshops;
