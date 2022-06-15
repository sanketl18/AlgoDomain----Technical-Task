import { useState, useEffect } from "react";
import { Navigation } from "./Component/navigation";
import { About } from "./Component/about";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App1 = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    
  }, []);

  return (
    <div>
      <Navigation />
      
      <About data={landingPageData.About} />
    </div>
  );
};

export default App1;
