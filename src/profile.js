import React from "react";
import manPhoto from './profile.jpeg';
import './profile.css';
import JobList from "./joblist";

function Profile() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    occupation1: "UI/UX Designer",
    occupation2: "Graphic Designer",
    email: "johndoe@example.com",
    address: "123 Main Street, Anytown USA",
    phone: "+1 (555) 555-1212",
  };

  function handleSettingsClick() {
    // handle click on settings button
  }

  function handleAnalyticsClick() {
    // handle click on analytics button
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={manPhoto} alt="Profile" className="profile-photo" />
        <div className="profile-header-info">
          <h1>{user.firstName} {user.lastName}</h1>
          <p>@{user.username}</p>
          <p>#{user.occupation1}, #{user.occupation2}</p>
          <button className="profile-btn" onClick={handleSettingsClick}>
            <i className="fas fa-cog"></i> Settings
          </button>
          <button className="profile-btn" onClick={handleAnalyticsClick}>
            <i className="fas fa-chart-line"></i> Analytics
          </button>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
        <div className="profile-section">
          <h2>Job Listings</h2>
          <JobList occupations={[user.occupation1, user.occupation2]} />
        </div>
      </div>
    </div>
  );
}

export default Profile;
