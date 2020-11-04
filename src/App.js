import React from "react";
import Member from "./Member";

import photo1 from "./assets/img/photo1.png";
import photo2 from "./assets/img/photo2.png";
import photo3 from "./assets/img/photo3.png";
import photo4 from "./assets/img/photo4.png";
import photo5 from "./assets/img/photo5.png";
import photo6 from "./assets/img/photo6.png";

import "./styles.css";

const App = () => {
  return (
    <div className="container">
        <div className="col s12 m6">
          <p className="crew__title">The creative crew</p>
        </div>
        <div className="col s12 m6">
          <p className="crew__subtitle">WHO ARE WE</p>
          <p className="crew__text">
            We are team of creatively diverse. Driven. Innovative individuals
            working in various locations from the world.
          </p>
        </div>
        <div className="crew__members">
          <Member photo={photo1} name="Bill Mahoney" position="Product Owner" />
          <Member photo={photo2} name="Saba Cabrera" position="Art Director" />
          <Member photo={photo3} name="Shae Le" position="Tech Lead" />
          <Member photo={photo4} name="Skylah Lu" position="UX Designer" />
          <Member photo={photo5} name="Giff Richards" position="Dev" />
          <Member photo={photo6} name="Stan John" position="Dev" />
        </div>
        <footer className="crew__footer">
          <div>
          </div>
          <p>juanmiguelruiz @ DevChallenges.io</p>
        </footer>
      </div>
  );
};

export default App;
