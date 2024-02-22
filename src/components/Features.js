import React from "react";
import benefit1 from "../images/benefit1.png";
import benefit2 from "../images/benefit2.png";
import benefit3 from "../images/benefit3.png";
import benefit4 from "../images/benefit4.png";

import Footer from "./Footer";

const Benefits = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <div
        className="container-fluid"
        style={{ backgroundColor: "#013220", height: "94vh" }}
      >
        <h1 className="pt-5 text-center" style={{ color: "white" }}>
          FEATURES OF TRAIN-ON
        </h1>
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-3">
              <div
                className="card shadow p-3 mb-5 bg-white rounded-5 "
                style={{ borderRadius: "50px", height: "62vh" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={benefit1}
                    alt=""
                    className="rounded float-center pt-3 pb-2"
                    style={{ height: "175px", width: "185px" ,borderRadius:"50%"}}
                  />
                </div>
                <div>
                  <h5
                    className="p-2"
                    style={{
                      color: "#4455a4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    REAL TIME POSE RECOGNITION
                  </h5>
                  <p className="p-2" style={{ fontWeight: "bold" }}>
                   TrainOn's ML model accurately identifies and recognizes yoga poses performed by the user in real-time through the device's camera. This feature ensures that users receive immediate feedback on their form and alignment, helping them refine their technique and prevent injury.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card shadow p-3 mb-5 bg-white rounded-5"
                style={{ borderRadius: "50px", height: "62vh" }}
              >
                <div className="d-flex justify-content-center ">
                  <img
                    src={benefit2}
                    alt=""
                    className="rounded float-center pt-3 pb-2"
                    style={{ height: "175px", width: "185px" }}
                  />
                </div>
                <div>
                  <h4
                    className="p-2"
                    style={{
                      color: "#4455a4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    PERSONALISED POSE RECOMMENDATIONS
                  </h4>
                  <p className="p-2" style={{ fontWeight: "bold" }}>
                  TrainOn's ML model provides personalized pose recommendations based on the user's skill level, flexibility, and specific areas of focus. By analyzing the user's movements and posture, the app suggests appropriate poses to target their individual needs and goals.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card shadow p-3 mb-5 bg-white rounded-5"
                style={{ borderRadius: "50px", height: "62vh" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={benefit3}
                    alt=""
                    className="rounded float-center pt-3 pb-2"
                    style={{ height: "175px", width: "185px" }}
                  />
                </div>
                <div>
                  <h5
                    className="p-2"
                    style={{
                      color: "#4455a4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    PRIVACY
                  </h5>
                  <p className="p-2" style={{ fontWeight: "bold" }}>
                  TrainOn allows users to practice yoga in the privacy of their own space, without the need to attend group classes or share their practice with others. This feature enables users to focus solely on their individual practice without feeling self-conscious or exposed, promoting a sense of comfort, autonomy, and privacy.

                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="card shadow p-3 mb-5 bg-white rounded-5"
                style={{ borderRadius: "50px", height: "62vh" }}
              >
                <div className="d-flex justify-content-center">
                  <img
                    src={benefit4}
                    alt=""
                    className="pt-1 rounded float-center pt-3 pb-2"
                    style={{ height: "168px", width: "185px" }}
                  />
                </div>
                <div>
                  <h5
                    className="p-2"
                    style={{
                      color: "#4455a4",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    SEAMLESS POSE PROGRESSION
                  </h5>
                  <p className="p-2" style={{ fontWeight: "bold" }}>
                  TrainOn seamlessly transitions users from one pose to the next based on the ML model's recognition of completed poses. Once a user successfully completes a pose, the app automatically advances to the next pose in the sequence, maintaining the flow and continuity of the session. This feature eliminates the need for manual intervention, allowing users to focus fully on their practice without interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Benefits;
