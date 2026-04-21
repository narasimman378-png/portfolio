import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import Banner from "./components/Home/banner";
import AbouTmE from "./components/Home/aboutme";
import Experience from "./components/Home/experience";
import MyEducations from "./components/Home/education";
import SelectedWorks from "./components/Home/selectedworks";
import OurSkills from "./components/Home/ourskills";
import OurProjects from "./components/Home/ourProjects";

// Layout Components
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route
      path="/" element={
        <>
        <Banner/>
        <AbouTmE />
        <Experience />
        <MyEducations />
        <SelectedWorks />
        <OurSkills />
        <OurProjects />
        </>
      }
      >
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
