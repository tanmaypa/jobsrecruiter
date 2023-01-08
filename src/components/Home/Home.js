import React from "react";
import "./Home.css";
import laptop from "./laptop.jpg";

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const logout = JSON.parse(localStorage.getItem("logout"));

  return (
    <div className="mydiv">
      <div className="mycontainer">
        {!user && logout && (
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
              Logout
            </span>
            <br></br> You have successfully logged out.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => {
                localStorage.removeItem("logout");
              }}
            ></button>
          </div>
        )}
        <div className="contentPrimary">
          <div className="textBtn">
            <p
              style={{ color: "white", fontSize: "3rem", marginBottom: "0px" }}
            >
              Welcome to
            </p>
            <span>
              <p
                className="title"
                style={{ color: "white", fontSize: "2.5rem" }}
              >
                My
              </p>
              <p
                className="title"
                style={{ color: "#1da1f2", fontSize: "2.5rem" }}
              >
                jobs
              </p>
            </span>
            <button className="getstarted">Get Started</button>
          </div>
          <div className="imagectn">
            <img src={laptop} className="image" alt="imagealt" />
          </div>
        </div>
        <div className="contentSecondary">
          <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Why Us</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Get More<br></br>Visibility
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit optio.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Organize Your<br></br>Candidates
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit optio.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Verify Their<br></br>Abilities
                  </h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eligendi non quis exercitationem culpa nesciunt nihil aut
                    nostrum explicabo reprehenderit optio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "1.5rem", marginTop: "3rem" }}>
            Companies who Trust Us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
