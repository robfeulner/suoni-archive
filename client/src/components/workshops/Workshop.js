import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditorBox from "../tinyMCE/Editor";
import Comments from "../tinyMCE/Comments";
import Loading from "../global/Loading";

const Workshop = () => {
  const [artists, setArtists] = useState(null);
  const { workshopId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/get-workshops`)
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
        <>
          <Loading />
        </>
      ) : (
        <>
          <Wrapper>
            <EventWrapper>
              <EventDetailsWrapper key={findEvent._id}>
                <EventH2>{findEvent.name}</EventH2>

                <P>{findEvent.date}</P>
                <P>{findEvent.venue}</P>
                <P>{findEvent.description}</P>
              </EventDetailsWrapper>
            </EventWrapper>
            <EditorBox
              page={"workshops"}
              urlId={"workshopId"}
              findEvent={findEvent}
              artists={artists}
              comments={comments}
              setComments={setComments}
            />
            {/* <DisqusEditor eventId={eventId} /> */}
            <Comments
              page={"workshops"}
              urlId={"workshopId"}
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

export default Workshop;
