import React from 'react'
import "./ResumePage.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function ResumePage({ marginTop }) {
  return (
    <div
      className="page-container"
      style={{ marginTop: `${marginTop}px`, marginBottom: `${marginTop}px` }}
    >
      <h1 className="pageTitle">
        Resume
        <a href="/SKYKAPOOR_RESUME.pdf" download="SkyKapoor_Resume.pdf">
          <FontAwesomeIcon icon={faDownload} className="download-icon" />
        </a>
      </h1>

      <div className="resume-container">
        <h3 className="resume-section-header">Education</h3>
        <div className="resume-section">
          <h4 className="resume-subheader">George Brown College</h4>
          <p className="resume-text">
            Technical Methods in Orthotics / Prosthetics, 2025
          </p>
          <h4 className="resume-subheader">University of Toronto</h4>
          <p className="resume-text">Honours BSc., Biophysics, 2023</p>
        </div>
        <h3 className="resume-section-header">Awards / Presentations</h3>
        <div className="resume-section">
          <h4 className="resume-subheader">Technical Track Presenter</h4>
          <p className="resume-text">
            ISPO World Congress, Stockholm 2025
            <br />
            <span className="italics">
              "The Use of Organic Matter in an Aesthetic Finish for Laminated
              Prosthetic Devices"
            </span>
          </p>
          <h4 className="resume-subheader">Karl Ruder Scholarship</h4>
          <p className="resume-text">George Brown College, 2024</p>
        </div>
        <h3 className="resume-section-header">Experience</h3>
        <div className="resume-section">
          <h4 className="resume-subheader">
            Junior Orthotic Technical Assistant
          </h4>
          <p className="resume-text">Boundless Biomedical Bracing, 2025</p>
          <h4 className="resume-subheader">Prosthetic Technical Student</h4>
          <p className="resume-text">Ottobock Canada, 2024</p>
          <h4 className="resume-subheader">
            Prosthetic & Orthotic Laboratory Assistant
          </h4>
          <p className="resume-text">
            Sunnybrook Centre for Independent Living, 2024
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumePage
