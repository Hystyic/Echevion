import React, { useState, useEffect } from 'react';
import './joblist.css';

// mock data for job listings
const jobListings = [
  {
    id: 1,
    title: 'Graphic Designer',
    company: 'ABC Design Co.',
    payScale: '$50,000 - $70,000',
    duration: 'Full-time',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'UI/UX Design'],
  },
  {
    id: 2,
    title: 'Copywriter',
    company: 'XYZ Advertising',
    payScale: '$60,000 - $80,000',
    duration: 'Contract',
    skills: ['Copywriting', 'Content Marketing', 'Social Media Marketing'],
  },
  {
    id: 3,
    title: 'Art Director',
    company: '123 Creative Agency',
    payScale: '$80,000 - $100,000',
    duration: 'Full-time',
    skills: ['Graphic Design', 'Art Direction', 'Team Management'],
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: '456 Tech Solutions',
    payScale: '$70,000 - $90,000',
    duration: 'Full-time',
    skills: ['UI/UX Design', 'Wireframing', 'Prototyping'],
  },
];

const JobListing = ({ job }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="job-listing">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.payScale}</p>
      <p>{job.duration}</p>
      {!applied && <button onClick={handleApply}>Apply</button>}
      {applied && <p>Applied!</p>}
    </div>
  );
};

const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job, index) => (
        <JobListing key={index} job={job} />
      ))}
    </div>
  );
};

const JobListPage = ({ userSkills }) => {
  const [jobsForYou, setJobsForYou] = useState([]);
  const [otherJobs, setOtherJobs] = useState([]);

  useEffect(() => {
    // filter job listings based on user's skills
    const matchingJobs = userSkills
      ? jobListings.filter(job =>
          job.skills ? userSkills.some(skill => job.skills.includes(skill)) : false
        )
      : [];

    // set jobsForYou and otherJobs state based on matching jobs
    setJobsForYou(matchingJobs);
    setOtherJobs(jobListings.filter(job => !matchingJobs.includes(job)));
  }, [userSkills]);

  return (
    <div className="job-list-page">
      <h2>Jobs For You</h2>
      <JobList jobs={jobsForYou} />
      {otherJobs.length > 0 && (
        <>
          <hr />
          <h2>All Jobs</h2>
          <JobList jobs={otherJobs} />
        </>
      )}
    </div>
  );
};

export default JobListPage;
