import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);

  // Fetch jobs from the backend 
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };
    fetchJobs();
  }, []); 
  
  return (
    <div>
      <h2>Career Page</h2>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job._id}>
              <h3>{job.JobName}</h3>
              <p>Project: {job.ProjectName}</p>
              <p>Location: {job.Location}</p>
              <p>Salary Type: {job.SalaryType}</p>
              <button className='Apply-button'>Apply Now</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs available</p>
      )}
    </div>
  );
};

export default CareerPage;
