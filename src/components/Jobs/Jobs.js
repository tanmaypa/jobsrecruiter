/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import axios from "axios";
import Job from "../Job/Job";
import "./Jobs.css";
import { Link } from "react-router-dom";
const Jobs = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [clicked, setClicked] = useState(null);

  const handleLeft = () => {
    setPage(page - 1);
  };

  const handleRight = () => {
    setPage(page + 1);
  };

  const fetchJobs = async () => {
    const { data } = await axios.get(
      `https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${page}`,
      { headers: { Authorization: user?.token } }
    );

    setJobs(data.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [page]);

  return (
    <div className="myjob" style={ jobs?.data?.length > 1 ? (!clicked ? { height:'100%'} : { height:'100vh' }) : {height : '100vh'}}>
      <Link
        onClick={() => setClicked(null)}
        style={{ textDecoration: "none" }}
        to="/jobs"
      >
        <i
          className="bi bi-house-door-fill"
          style={{ color: "white", marginRight: "10px", marginLeft: "130px" }}
        ></i>
        <span style={{ color: "white" }}>Home</span>
      </Link>
      <div className="myjobscontainer">
        {user ? (
          <div
            style={{ zIndex: "1" }}
            className="alert alert-warning alert-dismissible fade show alert-fixed"
            role="alert"
          >
            <span
              style={{
                color: "#1da1f2",
                fontSize: "1.2rem",
                marginBottom: "10px",
              }}
            >
              Login
            </span>
            <br></br> You have successfully logged In.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <div
            style={{ zIndex: "1" }}
            className="alert alert-warning alert-dismissible fade show alert-fixed"
            role="alert"
          >
            <span
              style={{
                color: "#1da1f2",
                fontSize: "1.2rem",
                marginBottom: "10px",
              }}
            >
              Not Authorized
            </span>
            <br></br> Please login to see the jobs posted.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
        <div className="container">
          <p
            style={{ color: "white", fontSize: "1.5rem", marginBottom: "5px" }}
          >
            Jobs posted by you
          </p>
        </div>
        {user && jobs?.data?.length > 1 ? (
          <>
            <div className="container">
              <div className="row">
                {!clicked ? (
                  jobs?.data?.map((element) => {
                    return (
                      <div className="col-md-3" key={element.id}>
                        <Job
                          title={element.title}
                          description={element.description}
                          id={element.id}
                          location={element.location}
                          createdAt={element.createdAt}
                          updatedAt={element.updatedAt}
                          setClicked={setClicked}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="col-md-3">
                    <Job
                      title={clicked.title}
                      description={clicked.description}
                      id={clicked.id}
                      location={clicked.location}
                      createdAt={clicked.createdAt}
                      updatedAt={clicked.updatedAt}
                      clicked={clicked}
                      setClicked={setClicked}
                    />
                  </div>
                )}
              </div>
            </div>
            {!clicked && (
              <div
                className="d-flex justify-content-center"
                style={{ marginTop: "20px" }}
              >
                <button
                  disabled={page <= 1}
                  className="leftbtn"
                  style={page <= 1 ? { color: "gray" } : { color: "black" }}
                  onClick={() => handleLeft()}
                >
                  <i className="bi bi-caret-left-square"></i>
                </button>
                <button className="pagebtn">{page}</button>
                <button
                  disabled={page + 1 > Math.ceil(jobs?.metadata?.count / 20)}
                  style={
                    page + 1 > Math.ceil(jobs?.metadata?.count / 20)
                      ? { color: "gray" }
                      : { color: "black" }
                  }
                  className="rightbtn"
                  onClick={() => handleRight()}
                >
                  <i className="bi bi-caret-right-square"></i>
                </button>
              </div>
            )}
          </>
        ) : (
          user && jobs?.data?.length === 1 && <div className="nojobs" key={user.email}>
            <div className="nojobscontent">
              <i
                style={{
                  fontSize: "4rem",
                  marginBottom: "10px",
                  color: "gray",
                }}
                className="far fa-edit"
              ></i>
              <p>Your posted jobs will show here!</p>
              <button className="btn btn-sm my">Post a job</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
