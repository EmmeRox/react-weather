import React from "react";

function Weather() {
  let form = (
    <form className="Search-Bar">
      <input type="search" placeholder="Search a city" />
      <button type="submit" value="search">
        Search
      </button>
    </form>
  );

  return <div>{form}</div>;
}

export default Weather;
