import styled from "styled-components";
import { useState, useEffect } from "react";
import LettersList from "./LettersList";
import { Link } from "react-router-dom";

const Artists = () => {
  //Applying data
  const [artists, setArtists] = useState(null);
  //Removing "The" for the alphabetical order
  const [noThe, setNoThe] = useState(null);
  //Choosing your letter
  const [letter, setLetter] = useState("");

  useEffect(() => {
    fetch(`/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }

        let allArtists = [];
        const rearrangedArtists = data.data.map((ev) => {
          return ev.events.map((item) => {
            allArtists.push(...item.artist);
          });
        });
        const uniqueArtists = [...new Set(allArtists)];
        const noTheArray = uniqueArtists
          .map((name) => {
            if (name.includes("The ")) {
              return name.slice(4);
            } else {
              return name;
            }
          })
          .sort();

        const yesTheArraySorted = noTheArray.map((name) => {
          const nameWithThe = "The " + name;

          if (uniqueArtists.includes(nameWithThe)) {
            return nameWithThe;
          } else {
            return name;
          }
        });

        setArtists(yesTheArraySorted);
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
            <ArtistWrapper>
              {artists
                .filter((name) => name.startsWith(letter))
                .map((name) => (
                  <div>
                    <Link to={`/artist/${name}`}>{name}</Link>
                  </div>
                ))}
            </ArtistWrapper>
            <LettersList
              artists={artists}
              setArtists={setArtists}
              letter={setLetter}
              setLetter={setLetter}
            />
          </Wrapper>
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Artists;
