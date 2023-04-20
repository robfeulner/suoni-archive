import { COLORS } from "../global/constants";
import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// SEARCH BAR FUNCTIONALITY
const SearchBar = () => {
  const [artists, setArtists] = useState(null);
  const [value, setValue] = useState(""); //Input text on search bar
  const [isTransition, setIsTransition] = useState(false);

  //Focus for Input
  const inputRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}//get-events`)
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
        setArtists(uniqueArtists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Filtering of search terms
  const matchedSearch = artists
    ? artists.filter((artist) => {
        return artist && artist.toLowerCase().includes(value.toLowerCase());
      })
    : [];

  //Transition for SearchDiv

  const handleEvent = () => {
    setIsTransition(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setValue("");
      setIsTransition(false);
    }, 200);
  };

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          placeholder="Search Artist"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          onFocus={handleEvent}
          onBlur={handleBlur}
          ref={inputRef}
        />
        {/* Conditions for search query autocomplete */}
        {value.length >= 3 && matchedSearch.length > 0 && (
          <SearchDiv isTransition={isTransition}>
            <ul>
              {matchedSearch.map((matchSuggestion) => (
                <ListLink
                  to={`/artist/${matchSuggestion}`}
                  key={matchSuggestion._id}
                >
                  <Li>{matchSuggestion}</Li>
                </ListLink>
              ))}
            </ul>
          </SearchDiv>
        )}
      </InputWrapper>
      {/* Styling for search results */}
      <SearchIconWrapper>
        <FiSearchStyled />
      </SearchIconWrapper>
    </Wrapper>
  );
};

const SearchDiv = styled.div`
  background-color: ${COLORS.blue};
  border-radius: 25px;
  color: ${COLORS.cream};
  position: absolute;
  min-width: 325px;
  margin-top: -5px;
  z-index: 4;

  transition: opacity 2s ease-in-out, width 2s ease-in-out;
  opacity: ${({ isTransition }) => (isTransition ? "1" : "0")};
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const Li = styled.li`
  padding: 0 10px;
  font-size: 1.2em;
  &:hover {
    font-style: italic;
    text-shadow: 2px 4px 0px #ea0000;
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.cream};
  &:visited {
    color: ${COLORS.cream};
  }
`;

const Wrapper = styled.div`
  display: flex;

  align-items: center;
  align-content: center;
`;

const InputWrapper = styled.div``;

const Input = styled.input`
  height: 40px;
  border: none;
  border-radius: 20px;
  padding: 0 16px;
  font-size: 1rem;
`;

const FiSearchStyled = styled(FiSearch)`
  font-size: 2em;
  margin-top: 6px;
`;

const SearchIconWrapper = styled.div`
  cursor: pointer;
`;

export default SearchBar;
