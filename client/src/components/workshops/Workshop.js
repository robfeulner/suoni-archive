import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Workshop = () => {
  const [artists, setArtists] = useState(null);
  const { workshopId } = useParams();

  useEffect(() => {
    fetch(`/get-workshops`)
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

  //Allows me to look through out all the years in my data

  const flatEvent = artists?.flatMap((year) => year.events);
  const findEvent =
    flatEvent && flatEvent.find((event) => event._id === workshopId);

  return (
    <>
      {!artists ? (
        <></>
      ) : (
        <>
          <div key={findEvent._id}>
            <h3>{findEvent.name}</h3>

            <p>{findEvent.date}</p>
            <p>{findEvent.venue}</p>
            <p>{findEvent.description}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Workshop;
