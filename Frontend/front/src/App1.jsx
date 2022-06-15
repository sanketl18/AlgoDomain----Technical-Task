import { useState, useEffect } from "react";
import { Navigation } from "./Component/navigation";
import { About } from "./Component/about";
import SmoothScroll from "smooth-scroll";
import JsonData from "./data/data.json";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App1 = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      
      <About data={landingPageData.About} />
    </div>
  );
};

export default App1;
