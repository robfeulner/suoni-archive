import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./header and footer/Header";
import Footer from "./header and footer/Footer";
import Home from "./home/Home";
import Artists from "./artists/Artists";
import Artist from "./artists/Artist";
import Event from "./events/Event";
import Year from "./year/Year";
import Venues from "./venues/Venues";
import Venue from "./venues/Venue";
import Workshops from "./workshops/Workshops";
import Workshop from "./workshops/Workshop";
import GlobalStyles from "./global/GlobalStyles";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/artists" element={<Artists />} />
              <Route path="/artist/:artistId" element={<Artist />} />
              <Route path="/events/:eventId" element={<Event />} />
              <Route path="/years/:artistId" />
              <Route path="/years/" element={<Year />} />
              <Route path="/venues/" element={<Venues />} />
              <Route path="/venues/:venueId" element={<Venue />} />
              <Route path="/workshops/" element={<Workshops />} />
              <Route path="/workshops/:workshopId" element={<Workshop />} />
            </Routes>
          </div>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

export default App;
