import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUniversity, faGraduationCap, faCode } from "@fortawesome/free-solid-svg-icons"; // Import the icons you need

const ScheduledStudent = () => {
  const [scheduledRequest, setScheduledRequest] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchScheduledRequest = async () => {
      try {
        const response = await fetch("https://proconnect-backend.onrender.com/user/view_student_schedule", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (!response.ok) {
          const errorMessage = await response.text();
          setError(errorMessage);
        } else {
          const data = await response.json();
          if (data[0] == null) {
            console.log("hi");
            setScheduledRequest("");
          } else {
            setScheduledRequest(data);
            console.log(data);
          }
        }
      } catch (error) {
        setError("Network error. Please try again later.");
      }
    };

    fetchScheduledRequest();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Scheduled Request</h2>
      {(error || scheduledRequest === "") && (
        <div className="alert alert-danger">No scheduled Requests</div>
      )}
      {scheduledRequest ? (
        scheduledRequest.length > 0 ? (
          <div className="card mt-3">
            <div className="card-body">
              {scheduledRequest.map((request, index) => (
                <div key={index}>
                  <div>
                    <strong>Date:</strong> {request.date}
                  </div>
                  <div>
                    <strong>Time:</strong> {request.time}
                  </div>
                  <div>
                    <strong>Interviewer Name:</strong>{" "}
                    {request.interviewer_name}
                  </div>
                  <div>
                    <strong>Interviewer Email:</strong>{" "}
                    {request.interviewer_email}
                  </div>
                  <div>
                    <strong>Interviewer Company:</strong>{" "}
                    {request.interviewer_company}
                  </div>
                  <div>
                    <strong>Interviewer Role:</strong>{" "}
                    {request.interviewer_role}
                  </div>
                  <div>
                    <strong>Interviewer Experience:</strong>{" "}
                    {request.interviewer_experience}
                  </div>
                  <i>Make further communication with Interviewer by email</i>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>No scheduled requests found.</p>
        )
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default ScheduledStudent;
