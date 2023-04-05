import { COLORS } from "../global/constants";
import Loading from "../global/Loading";
import styled from "styled-components";
import { useState, useEffect } from "react";
import LettersList from "./LettersList";
import { Link } from "react-router-dom";

const Artists = () => {
  //Applying data
  const [artists, setArtists] = useState(null);

  //Choosing your letter
  const [letter, setLetter] = useState("");

  //GET all artist names
  useEffect(() => {
    fetch(`/get-events`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 400 || data.status === 500) {
          throw new Error("Not good. Error.");
        }

        //Push artists into an array
        let allArtists = [];
        const rearrangedArtists = data.data.map((ev) => {
          return ev.events.map((item) => {
            allArtists.push(...item.artist);
          });
        });

        //Remove duplicates
        const uniqueArtists = [...new Set(allArtists)];

        //Remove "The" from artist name
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

  return (
    <>
      {!artists ? (
        <Loading />
      ) : (
        <>
          <Wrapper>
            <ArtistWrapper>
              {letter ? (
                <>
                  <LetterH1>{letter}</LetterH1>
                  {artists
                    .filter((name) =>
                      name.replace("The ", "").startsWith(letter)
                    )
                    .map((name) => (
                      <div>
                        <StyledLink to={`/artist/${name}`}>
                          <Name>{name}</Name>
                        </StyledLink>
                      </div>
                    ))}
                </>
              ) : (
                <>
                  <ChooseWrapper>
                    <ChooseSpan>Choose a letter</ChooseSpan>
                  </ChooseWrapper>
                </>
              )}
            </ArtistWrapper>
            <RightWrapper>
              {/* List of letters */}

              <LettersList
                artists={artists}
                setArtists={setArtists}
                letter={setLetter}
                setLetter={setLetter}
              />
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
  margin-left: 35px;
`;

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 30%;
`;

const LetterH1 = styled.h1`
  font-size: 3em;
  margin-left: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: blue;
  }
`;

const Name = styled.span`
  font-size: 1.5em;
  color: black;

  &:hover {
    color: ${COLORS.blue};
  }
`;

const ChooseWrapper = styled.div``;
const ChooseSpan = styled.span`
  font-size: 2em;
  color: black;
  font-weight: bold;
`;

export default Artists;
