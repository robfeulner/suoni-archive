import Loading from "../global/Loading";
import styled from "styled-components";
import EditorBox from "../tinyMCE/Editor";
import Comments from "../tinyMCE/Comments";
import DisqusEditor from "../tinyMCE/DisqusEditor";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Event = () => {
  const [artists, setArtists] = useState(null);
  const { eventId } = useParams();
  const [comments, setComments] = useState([]);

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
        <Loading />
      ) : (
        <>
          <Wrapper>
            <EventWrapper>
              <EventDetailsWrapper key={findEvent._id}>
                <EventH2>{findEvent.artist.join(" + ")}</EventH2>

                <P>{findEvent.date}</P>
                <P>{findEvent.venue}</P>
                <P>{findEvent.price}</P>
                <P>{findEvent.description}</P>
              </EventDetailsWrapper>
            </EventWrapper>
            <EditorBox
              page={"events"}
              urlId={"eventId"}
              findEvent={findEvent}
              artists={artists}
              comments={comments}
              setComments={setComments}
            />
            {/* <DisqusEditor eventId={eventId} /> */}
            <Comments
              page={"events"}
              urlId={"eventId"}
              comments={comments}
              setComments={setComments}
            />
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  /* align-items: center; */
`;

const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: fit-content;
  border: 2px dotted grey;
  border-radius: 15px;
  min-width: 1200px;
  margin: 30px 0;
`;

const EventH2 = styled.h2``;

const P = styled.p`
  font-size: 1.5em;
`;

export default Event;
