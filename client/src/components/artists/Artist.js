import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Artist = () => {
  const [artists, setArtists] = useState(null);
  const { artistId } = useParams();
  console.log(artistId);

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

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <>
          <h1>Hello</h1>

          {artists
            .filter((artist) =>
              artist.events.some((event) => event.artist.includes(artistId))
            )
            .map((artist) =>
              artist.events
                .filter((event) => event.artist.includes(artistId))
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
        </>
      )}
    </>
  );
};

export default Artist;
