import React from "react";
import mock01 from '../assets/images/mock01.jpeg';
import mrmi from '../assets/images/mrmi.webp';
import cb4 from '../assets/images/cb4.webp';
import elibrar from '../assets/images/elibrar.webp';
import farm from '../assets/images/farm.jpeg';
import mock05 from '../assets/images/mock05.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>IOT based Virtual Smart Meter</h2></a>
                <p>Developed a smart IoT metering system that enables real-time virtual monitoring of energy consumption. Leveraging IoT connectivity, predictive analytics, and cloud-based data visualization, the system provides users with accurate insights into usage patterns, anomaly detection.
                </p>
            </div>
            <div className="project">
                <a href="https://lookerstudio.google.com/s/jIWDPnc19_o" target="_blank" rel="noreferrer"><img src={mrmi} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lookerstudio.google.com/s/jIWDPnc19_o" target="_blank" rel="noreferrer"><h2>Mining Revenue Monitoring Index </h2></a>
                <p>The Mining Revenue Monitoring Index (MRMI) tracks the operations of mining companies in Zimbabwe focusing on mineral output, gross revenues, profits, taxes and corporate social responsibility (CSR) since 2017. The initial focus of the index is on local and international companies mining diamonds, chrome, gold and platinum.</p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={cb4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Call Before You Dig </h2></a>
                <p>Call Before You Dig is a crucial damage prevention system designed to protect underground infrastructure and ensure safe excavation practices. By providing a centralized process for identifying buried utilities, the system helps prevent costly damages, service disruptions, and safety hazards
                </p>
            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={elibrar} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>TelOne E-Library Publisher Portal</h2></a>
                <p>This is an online educational platform that provides high-quality, learning resources.The entire platform targeted students for Telone center for learning.</p>
            </div>
            <div className="project">
                <a href="https://lookerstudio.google.com/s/kf9CmTzhkOc" target="_blank" rel="noreferrer"><img src={farm} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lookerstudio.google.com/s/kf9CmTzhkOc" target="_blank" rel="noreferrer"><h2>Zvizegwe Farm Dashboard</h2></a>
                <p> Dashboard for Zvizegwe Farm tracks births, deaths, total count, and costs for sheep, rabbits, and goats. It provides insights into livestock population changes, financial investment, and overall farm
                    productivity for informed decision-making.</p>
            </div>
            <div className="project">
                <a href="https://lookerstudio.google.com/s/kxmPRmx5ssk" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lookerstudio.google.com/s/kxmPRmx5ssk" target="_blank" rel="noreferrer"><h2>Water Utility Management </h2></a>
                <p> This interactive dashboard presents a detailed analysis of water meter infrastructure and apparent water loss in Hobhouse Township. It provides a comprehensive, real-time overview of: Water meter availability, meter functionality, billing status:</p>
            </div>
            <div className="project">
                <a href="https://lookerstudio.google.com/s/ntFGuUfax8s" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lookerstudio.google.com/s/ntFGuUfax8s" target="_blank" rel="noreferrer"><h2>Sivio Africa Giving Dashboard</h2></a>
                <p>AfricaGiving is running a campaign to find 400 individuals to donate US$25 towards African Nonprofits. This dashboard reports on the progress.</p>
            </div>
            </div>
        </div>

    );
}

export default Project;