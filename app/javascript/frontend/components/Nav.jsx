import React, { useState } from 'react';
import './styles/Nav.scss';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  const history = useHistory();
  const [isHomePage, setIsHomePage] = useState(window.location.pathname === "/")

  return (
    <header className="nav">
      <h1 onClick={() => {history.push("/"), setIsHomePage(true)}}>{isHomePage ? "Click on the cutest cat🐱" : "Click to Go Back ◀️"}</h1>
      <h1 id="score" onClick={() => {history.push("/score"), setIsHomePage(false)}}>{isHomePage ? "View Score" : ""}</h1>
    </header>
  );
}

export default Nav;
