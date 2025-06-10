import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import best from '../assets/images/best.jpg';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={best} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/kari160" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          </div>
          <h1>Tanaka M Kariri</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/kari160" target="_blank" rel="noreferrer"><GitHubIcon/></a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;