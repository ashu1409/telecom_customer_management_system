// frontend/src/components/PlanSelection.js
import React, { useState } from 'react';
import api from '../services/api';

const PlanSelection = () => {
  const [planData, setPlanData] = useState({
    planName: '',
    planCost: '',
    validity: '',
    planStatus: 'Active',
  });

  const handleChange = (e) => {
    setPlanData({ ...planData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/plans', planData);
      console.log(res.data);
      // Clear form after successful submission
      setPlanData({
        planName: '',
        planCost: '',
        validity: '',
        planStatus: 'Active',
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="planName" value={planData.planName} onChange={handleChange} placeholder="Plan Name" required />
      <input type="number" name="planCost" value={planData.planCost} onChange={handleChange} placeholder="Plan Cost" required />
      <input type="number" name="validity" value={planData.validity} onChange={handleChange} placeholder="Validity (in days)" required />
      <button type="submit">Select Plan</button>
    </form>
  );
};

export default PlanSelection;
