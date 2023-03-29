import styled from "styled-components";
import { useState, useEffect } from "react";

const Venues = () => {
  const [artists, setArtists] = useState(null);
  const [venue, setVenue] = useState(null);

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
      <h1>hello</h1>
    </>
  );
};

export default Venues;
