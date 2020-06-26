import React from "react";
import { Link } from "react-router-dom";

const memberStyle = {
  border: "1px solid",
  borderRadius: "5px",
  padding: "20px",
  margin: "10px",
  textAlign: "center",
};

export default function TeamMember({ member }) {
  return (
    <div>
      <div style={memberStyle}>
        <div className="member-text">
          <img
            className="member-img set-bg"
            src={`/img/member/${member.number}.jpg`}
            alt=""
          />
          <h3>{member.name}</h3>
          <span>{member.position}</span>
        </div>
        <hr />
        <div style={{ paddingBottom: "20px" }} className="member-social">
          <Link to="">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="">
            <i className="fa fa-linkedin"></i>
          </Link>
          <Link to="">
            <i className="fa fa-twitter"></i>
          </Link>
        </div>
        <div className="member-info">
          <img
            className="member-img set-bg"
            src={`/img/member/${member.number}.jpg`}
            alt=""
          />
          <div className="member-meta">
            <h2>Tom Binegar</h2>
            <span>Marketing Director</span>
          </div>
          <p>
            Jackson Nash is a full-time faculty member of the Marketing and
            Behavioural Science Division at the Sauder School of Business at
            UBC. He leads the Entrepreneurship Group, in the undergraduate and
            graduate programs, teaching actively in both of these.
          </p>
        </div>
      </div>
    </div>
  );
}
