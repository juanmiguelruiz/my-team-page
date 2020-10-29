import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

const Member = ({ photo, name, position }) => {
  return (
    <div className=" col s6 m4 member">
      <p className="crew__pos">{position}</p>
      <img src={photo} alt="crew" />
      <p className="crew__name">{name}</p>
    </div>
  );
};

Member.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default Member;
