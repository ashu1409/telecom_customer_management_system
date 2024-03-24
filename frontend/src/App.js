// frontend/src/App.js
import React from 'react';
import CustomerForm from './components/CustomerForm';
import PlanSelection from './components/PlanSelection';
import CustomerTable from './components/CustomerTable';

const App = () => {
  return (
    <div>
      <h1>Telecom Customer Management System</h1>
      <CustomerForm />
      <PlanSelection />
      <CustomerTable />
    </div>
  );
};

export default App;
