import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./header and footer/Header";
import Footer from "./header and footer/Footer";
import Home from "../home/Home";
import Artists from "./artists/Artists";
import Year from "./year/Year";
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
              <Route path="/artist/:artistId" />
              <Route path="/event/:eventId" />
              <Route path="/years/:artistId" />
              <Route path="/years/" element={<Year/>} />
              <Route path="/events/eventId" />
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
