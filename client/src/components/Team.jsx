import React from "react";
// import { Link } from 'react-router-dom'
import TeamMember from "./TeamMember";

const members = [
  { number: 1, name: "Tandale Shubham", position: "Full Stack Developer" },
  { number: 2, name: "Saudagar Thorat", position: "Backend Developer" },
  { number: 3, name: "Saurabh Adhatrao", position: "Project Manager" },
  { number: 4, name: "Akshay Masal", position: "Front End Developer" },
  { number: 5, name: "Suraj Koli", position: "Software Tester" },
];

export default function Team() {
  return (
    <div>
      <section className="team-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Meet Our Team</h2>
            <p>
              Our experts in the field of crypto currency can always help you
              with any of your questions!
            </p>
          </div>
        </div>
        <div className="team-members clearfix row">
          <div className="col-lg-4">
            <TeamMember member={members[0]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[1]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[2]} />
          </div>
        </div>
        <div className="team-members clearfix row">
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <TeamMember member={members[3]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[4]} />
          </div>
        </div>
      </section>
    </div>
  );
}
