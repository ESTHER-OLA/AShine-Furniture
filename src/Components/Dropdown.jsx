import React, { useState } from "react";
import PropTypes from "prop-types";
import dropdownIcon from "../assets/images/drowdown-arrow.png";

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["All", "Bed", "Sofa", "Dinning Chairs", "Work Space Desks"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selected || "Categories"}
        <span>
          <img src={dropdownIcon} alt="Dropdown Icon" />
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {selected === "" && (
            <div
              className={`dropdown-item ${
                selected === "Categories" ? "active" : ""
              }`}
              onClick={() => {
                setSelected("Categories");
                setIsActive(false);
              }}
            >
              Categories
            </div>
          )}
          {options.map((option, index) => (
            <div
              key={index}
              className={`dropdown-item ${option === selected ? "active" : ""}`}
              onClick={() => {
                setSelected(option);
                setIsActive(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default Dropdown;
