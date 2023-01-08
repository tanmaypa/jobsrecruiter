/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Applicant from "../Applicant/Applicant";
import "./Job.css";

const Job = (props) => {
  let { title, description, id, location, setClicked, clicked } = props;
  const [applicants, setApplicants] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile"));

  const fetchApplicants = async () => {
    const { data } = await axios.get(
      `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${id}/candidates`,
      { headers: { Authorization: user?.token } }
    );
    setApplicants(data.data);
  };

  useEffect(() => {
    if (clicked) {
      fetchApplicants();
    }
  }, [clicked]);

  return (
    <>
      <div className="my-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              {title.length > 10 ? `${title.slice(0, 10)}...` : `${title}`}
            </h5>
            <p className="card-text">
              {description.length > 10
                ? `${description.slice(0, 10)}...`
                : `${description}`}
            </p>
            <p
              className="card-text"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <i
                style={{ color: "#1da1f2", marginRight: "5px" }}
                className="bi bi-geo-alt-fill"
              ></i>
              {location.length > 7
                ? `${location.slice(0, 5)}...`
                : `${location}`}

              <button
                rel="noreferrer"
                target="_blank"
                className="btn btn-sm"
                data-bs-toggle={clicked && "modal"}
                data-bs-target={clicked && "#staticBackdrop"}
                onClick={() => {
                  setClicked(props);
                }}
              >
                View Application
              </button>
            </p>
          </div>
        </div>
      </div>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Applicants for this job
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <br></br>
            </div>
            <p className="ptotal">
              {applicants?.length > 0
                ? `Total ${applicants?.length} applications`
                : "0 applicantions"}
            </p>

            <div className="modal-body">
              <div className="container_applicant">
                <div className="row">
                  {applicants ? (
                    applicants?.map((element) => {
                      return (
                        <div
                          className="col-md-6"
                          style={{ padding: "10px" }}
                          key={element.id}
                        >
                          <Applicant
                            email={element.email}
                            description={element.description}
                            id={element.id}
                            name={element.name}
                            skills={element.skills}
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="noapplicants">
                      <i className="bi bi-file-earmark-person"></i>
                      <p>No applicantions available! </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
