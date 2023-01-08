import React from "react";
import "./Applicant.css";

const Applicant = (props) => {
  let { email, name, skills } = props;
  return (
    <div
      className="my-3 my-3_applicant"
      style={{ margin: "0px", padding: "0px" }}
    >
      <div className="card_">
        <div className="card-body applicant">
          <div
            className="body-content"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="profile-content"
              style={{ display: "flex", marginBottom: "15px" }}
            >
              <div className="profile">{name?.charAt(0).toUpperCase()}</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  className="card-text p_applicant"
                  style={{ fontWeight: "bold" }}
                >
                  {name}
                </p>
                <p className="card-text p_applicant">{email}</p>
                <div />
              </div>
            </div>
            <p
              className="card-text p_applicant"
              style={{ marginLeft: "0px", fontWeight: "bold" }}
            >
              Skills
            </p>
            <p className="card-text p_applicant" style={{ marginLeft: "0px" }}>
              {skills}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
