import React, { useState } from "react";
import "./ExpandableCards.css";

const ExpandableCards = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="expandable-card">
      <div className="expandable-card-header">
        <h3 className="expandable-card-title">{title}</h3>
        <button className="expandable-card-toggle" onClick={handleExpandCollapse}>
          {isExpanded ? <img src="https://img.icons8.com/?size=50&id=9433&format=png" alt="Close" /> : <img src="https://img.icons8.com/?size=24&id=3220&format=png" alt="Open" />}
        </button>
      </div>
      <div className="expandable-card-content" hidden={!isExpanded}>
        Here are the contents
      </div>
    </div>
  );
};

export default ExpandableCards;
