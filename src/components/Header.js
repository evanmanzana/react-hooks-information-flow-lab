import React, { useState } from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <>
      <h2>Shopster</h2>
      <div className={"App " + (isDarkMode ? "dark" : "light")}>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </div>
    </>
  );
}

export default Header;
