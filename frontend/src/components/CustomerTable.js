import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await api.get('/customers');
        setCustomers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Assigned Mobile Number</th>
            <th>Plan</th>
            <th>Plan Cost</th>
            <th>Validity</th>
            <th>Plan Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.assignedMobileNumber}</td>
              <td>{customer.plan}</td>
              <td>{customer.planCost}</td>
              <td>{customer.validity}</td>
              <td>{customer.planStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
