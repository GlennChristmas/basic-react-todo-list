import React, { useState } from "react";

const CategorisationToggle = (props) => {
  return (
    <button onClick={() => props.handleCategoryClick()}>
      {props.isCategorised ? "View altogether" : "View by category"}
    </button>
  );
};

export default CategorisationToggle;
