import Loading from "../global/Loading";
import styled from "styled-components";
import EditorBox from "../tinyMCE/Editor";
import Comments from "../tinyMCE/Comments";
import DisqusEditor from "../tinyMCE/DisqusEditor";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const Event = () => {
  const [artists, setArtists] = useState(null);
  const [comments, setComments] = useState([]);
  const { eventId } = useParams();

  //Allows me to look through out all the years in my data
  // Fake line

  const flatEvent = artists?.flatMap((year) => year.events);
  const findEvent =
    flatEvent && flatEvent.find((event) => event._id === eventId);

  //Get list of event objects

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
        <>
          <Wrapper>
            {/* Event info with ticket background */}
            <EventWrapper>
              <TicketDiv>
                <EventText key={findEvent._id}>
                  <EventNameDiv>
                    <EventH2>{findEvent.artist.join(" + ")}</EventH2>
                  </EventNameDiv>
                  <EventDateDiv>
                    <P>{moment(findEvent.date).format("MMMM Do YYYY")}</P>
                  </EventDateDiv>
                  <VenuePriceDiv>
                    <P>{findEvent.venue}</P>
                    <P>{findEvent.price}</P>
                  </VenuePriceDiv>
                </EventText>
              </TicketDiv>
            </EventWrapper>
            <EventDescriptionDiv>
              <P>{findEvent.description}</P>
            </EventDescriptionDiv>

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
`;

const EventWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TicketDiv = styled.div`
  height: 424px;
  width: 1200px;
  background-image: url("/images/ticket02.png");
`;

const EventText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 67%;
  margin-left: 10%;
`;

const EventNameDiv = styled.div`
  font-size: 2em;
  margin-top: 20px;
  text-align: center;
`;

const EventDateDiv = styled.div`
  margin-top: -10px;
`;

const VenuePriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: -15px;
`;

const EventDescriptionDiv = styled.div`
  text-align: center;
`;

const EventH2 = styled.h2`
  font-size: 1.33em;
  mix-blend-mode: hard-light;
`;

const P = styled.p`
  font-size: 2em;
  font-weight: bolder;
  opacity: 80%;
`;

export default Event;
