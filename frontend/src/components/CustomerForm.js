// frontend/src/components/CustomerForm.js
import React, { useState } from 'react';
import api from '../services/api';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    adharNumber: '',
    registrationDate: new Date().toISOString().split('T')[0],
    assignedMobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/customers', formData);
      console.log(res.data);
      // Clear form after successful submission
      setFormData({
        name: '',
        dob: '',
        email: '',
        adharNumber: '',
        registrationDate: new Date().toISOString().split('T')[0],
        assignedMobileNumber: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="adharNumber" value={formData.adharNumber} onChange={handleChange} placeholder="Adhar Number" required />
      <input type="text" name="assignedMobileNumber" value={formData.assignedMobileNumber} onChange={handleChange} placeholder="Assigned Mobile Number" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;
