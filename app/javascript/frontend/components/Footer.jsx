import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './styles/Footer.scss';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const history = useHistory();

  return(
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 onClick={() => history.push("/")} style={{cursor: "pointer"}}>Cutest Cat</h1>
          </div>
        </div>
        <hr />
        <div className="infos">
          <div className="logos">
            <a href="https://github.com/Lulu92270" target="_blank"><FaGithub color="white" size="3rem"></FaGithub></a>
            <a href="https://www.linkedin.com/in/lucienandrieux/" target="_blank"><FaLinkedin color="white" size="3rem"/></a>
            <a href="https://www.facebook.com/Lulu-Engineerings-106099031582639" target="_blank"><FaFacebook color="white" size="3rem"/></a>
          </div>
          <div className="property">
            &copy;{new Date().getFullYear()} Lucien Andrieux | Rails React App | All rights reserved | Terms of Service | Privacy
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
