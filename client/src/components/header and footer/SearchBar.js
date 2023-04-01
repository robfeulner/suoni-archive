import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

// SEARCH BAR FUNCTIONALITY
const SearchBar = () => {
  const [artists, setArtists] = useState(null);
  const [value, setValue] = useState(""); //Input text on search bar
  //Focus for Input
  const inputRef = useRef(null);

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
        setArtists(uniqueArtists);
        // console.log(uniqueArtists);
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

//   console.log(matchedSearch);

  return (
    <Wrapper>
      {/* Expansion of search bar */}
      <InputWrapper>
        <Input
          placeholder="Search Artist"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          //   onKeyDown={(ev) => {
          // if (ev.key === "Enter") {
          //     handleSelect(ev.target.value);
          //   setValue("");
          // }
          onBlur={() => {
            setTimeout(() => {
              setValue("");
            }, 400);
          }}
        />
        {/* Conditions for search query autocomplete */}
        {value.length >= 3 && matchedSearch.length > 0 && (
          <Div>
            <ul>
              {matchedSearch.map((matchSuggestion) => (
                <ListLink
                  to={`/artist/${matchSuggestion}`}
                  key={matchSuggestion._id}
                >
                  <Li>{matchSuggestion}</Li>
                </ListLink>
              ))}
              {console.log(matchedSearch)}
            </ul>
          </Div>
        )}
      </InputWrapper>
      {/* Styling for search results */}
      <SearchIconWrapper>
        <FiSearchStyled />
      </SearchIconWrapper>
    </Wrapper>
  );
};

const Div = styled.div`
  border-radius: 15px;
  position: absolute;
  background-color: yellow;
    z-index: 2;
  ul {
    list-style-type: none;
    padding: 0;
  }
`;

const Li = styled.li`
  padding: 10px;
  &:hover {
    color: green;
  }
`;

const ListLink = styled(Link)`
  text-decoration: none;
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
