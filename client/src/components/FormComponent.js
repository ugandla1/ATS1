import React, { useState } from 'react';
import axios from 'axios';


const FormComponent = () => {
  // State to store form data
  const [formData, setFormData] = useState({
   
        JobID: "",
        JobName: "",
        ProjectName:"",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",
        JobDes: "",
        Location: "",
        SalaryType: "",
  });

  // State to handle success or error messages
  const [responseMessage, setResponseMessage] = useState('');

  // Handle change in form input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5001/api/data', formData);
      console.log('Response:', response.data);


      // Set success message
      setResponseMessage('job posted succesfully !');
    } catch (error) {
      // Set error message
      console.error('Error submitting data:', error.response?.data || error.message);
      setResponseMessage(error.response?.data?.error || 'Error submitting data');


      //setResponseMessage('Error submitting data');
    }

    // Reset form
    setFormData({
      
        JobID: "",
        JobName: "",
        ProjectName:"",
        OpeningDate: "",
        ExpiryDate: "",
        TotalOpenings: "",
        Experience: "",
        JobDes: "",
        Location: "",
        SalaryType: "",
    });
  };

  return (
    <div>
      <h1>Submit Your Information</h1>
      <form  onSubmit={handleSubmit}>
     
      <div >
      <label >JobID </label>

  <input  type="text" name="JobID" onChange={handleInputChange} />

      </div>
      <div >
      <label >JobName </label>

  <input  type="text" name="JobName" onChange={handleInputChange} />

      </div>
      <div >
      <label >ProjectName </label>

  <input  type="text" name="ProjectName" onChange={handleInputChange} />

      </div>
      <div>
      <label >OpeningDate </label>

  <input type="date" name="OpeningDate" onChange={handleInputChange} />
        
      </div>
      <div >
      <label >ExpiryDate </label>

  <input type="date" name="ExpiryDate" onChange={handleInputChange} />

      </div>
      <div >
      <label >Experience </label>

  <input  type="text" name="Experience" onChange={handleInputChange} />

      </div>
      <div >
      <label >JobDes </label>

  <textarea  name="JobDes" onChange={handleInputChange}></textarea>

      </div>
      <div >
      <label >Location </label>

  <input  type="text" name="Location" onChange={handleInputChange} />

      </div>
      <div >
      <label >SalaryType: </label>

  <input  type="text" name="SalaryType" onChange={handleInputChange} />

      </div>

        <button type="submit">Submit</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FormComponent;
