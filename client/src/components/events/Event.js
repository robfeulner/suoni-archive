import styled from "styled-components";
import EditorBox from "../tinyMCE/Editor";
import Comments from "../tinyMCE/Comments";
import DisqusEditor from "../tinyMCE/DisqusEditor";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Event = () => {
  const [artists, setArtists] = useState(null);
  const { eventId } = useParams();

  //Allows me to look through out all the years in my data

  const flatEvent = artists?.flatMap((year) => year.events);
  const findEvent =
    flatEvent && flatEvent.find((event) => event._id === eventId);

  useEffect(() => {
    fetch(`/get-events`)
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
        <></>
      ) : (
        <>
          <div key={findEvent._id}>
            <h3>{findEvent.artist.join(" + ")}</h3>

            <p>{findEvent.date}</p>
            <p>{findEvent.venue}</p>
            <p>{findEvent.price}</p>
          </div>
          <EditorBox page={"events"} urlId={"eventId"} />
          {/* <DisqusEditor eventId={eventId} /> */}
          <Comments page={"events"} urlId={"eventId"} />
        </>
      )}
    </>
  );
};

export default Event;
