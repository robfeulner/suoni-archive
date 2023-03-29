import styled from "styled-components";
import { useState, useEffect } from "react";
import YearList from "./YearList";

const Year = () => {
  const [year, setYear] = useState(null);
  const [artists, setArtists] = useState(null);

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
  }, []);

  //.filter needs to access the date, and there should be an if condition on date to include 2006
  //then in the .filter, do a .map for "artist", you MIGHT have to do a .map to get the names within "artist"
  //then a .sort to get them in alphabetical order.

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <>
        <Wrapper>
            <EventWrapper >
          {artists
            .filter((event) => event.year === year)
            .map((event) =>
            event.events.map((event) => (
                <div key={event._id}>
                  <h3>{event.artist.join(" + ")}</h3>
                  <p>{event.date}</p>
                  <p>{event.venue}</p>
                  <p>{event.price}</p>
                  </div>
                  ))
                  )}
                  </EventWrapper>
              <YearList year={year} setYear={setYear} artists={artists}/>
        </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
display: flex;
`

const EventWrapper = styled.div`
display: flex;
flex-direction: column;
`

export default Year;
