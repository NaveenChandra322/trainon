import React from "react";
import homepage from "../images/homepage.jpg";
import { Link } from "react-router-dom";
import Carousel1 from "../images/Carousel1.png";
import Carousel2 from "../images/Carousel2.png";
import Carousel3 from "../images/Carousel3.png";

import Footer from "./Footer";

const FrontPage = () => {
  return (
    <div className="pt-5 mb-5 pb-5" style={{ backgroundColor: "#c9c8c7" }}>
      <div className="container-fluid pt-5 pb-5">
        <div
          className="row justify-content-center align-items-center"
          style={{ paddingTop: "10px" }}
        >
          <div className="col-lg-7 order-lg-1">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="3000" style={{width:"inherit",height:"inherit"}} >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={Carousel1} alt="First slide" style={{width:"inherit",height:"400px"}}/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Carousel2} alt="Second slide" style={{width:"inherit",height:"400px"}}/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src={Carousel3} alt="Third slide" style={{width:"inherit",height:"400px"}}/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
  </div>
            {/* <img
              src={homepage}
              alt=""
              className="img-fluid"
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                maxWidth: "100%",
              }}
            /> */}
          </div>
          <div className="col-lg-5 order-lg-2">
            <div
              className="card shadow rounded-5"
              style={{
                backgroundColor:"#000000",
                padding: "50px",
                borderRadius: "40px",
                textAlign: "center",
                margin: 3,
                height: "40vh",
              }}
            >
              <h3
                style={{
                  opacity: "1",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                  margin: "10px 0",
                  marginTop: "90px",
                }}
              >
                EMPOWERING PEOPLE TO START YOGA
              </h3>
              <div style={{ textAlign: "center" }}>
                {localStorage.getItem("token") === null ? (
                  <Link
                    className="btn my-2 my-sm-0 shadow rounded"
                    style={{
                      backgroundColor: "#eeeeee",
                      color: "#eeeeee",
                      fontWeight: "bold",
                      fontSize: "18px",
                      width: "100%",
                      maxWidth: "220px",
                      marginTop: "20px",
                    }}
                    type="submit"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                ) : (
                  <>
                    {localStorage.getItem("role") === "student" && (
                      <a
                        className="btn my-2 my-sm-0 shadow rounded"
                        style={{
                          backgroundColor: "#6a9c5c",
                          color: "white",
                          fontWeight: "bold",
                          fontSize: "18px",
                          width: "50vh",
                          height: "5vh",
                          marginTop: "20px",
                          borderRadius: "10px",
                        }}
                        type="submit"
                        href="/ScheduledStudent"
                      >
                        START
                      </a>
                    )}
                    {localStorage.getItem("role") === "professional" && (
                      <a
                        className="btn my-2 my-sm-0 shadow rounded"
                        style={{
                          backgroundColor: "#4455a4",
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: "18px",
                          width: "100%",
                          maxWidth: "220px",
                          marginTop: "20px",
                        }}
                        type="submit"
                        href="/ScheduledProfessional"
                      >
                        To Dashboard
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FrontPage;
