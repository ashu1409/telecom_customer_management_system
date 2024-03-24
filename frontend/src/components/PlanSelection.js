import React, { useState } from 'react';
import axios from 'axios';

const PlanSelection = () => {
  const [plan, setPlan] = useState('');

  const handlePlanChange = (e) => {
    setPlan(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/plans', { planName: plan });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Dropdown to select plan */}
      <button type="submit">Select Plan</button>
    </form>
  );
};

export default PlanSelection;
