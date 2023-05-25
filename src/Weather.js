import React, { useState } from "react";

export default function Weather() {
  let [city, setCity] = useState("");
  let [documentation, setDocumentation] = useState("");
  function handleSearch(event) {
    event.preventDefault();
    if (city.length > 0) {
      return setDocumentation(`It is 19°C in ${city}`);
    } else {
      alert("Enter a city");
    }
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <h2>This is React Weather</h2>
      <form onSubmit={handleSearch} className="weatherForm">
        <input type="text" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{documentation}</p>
    </div>
  );
}
