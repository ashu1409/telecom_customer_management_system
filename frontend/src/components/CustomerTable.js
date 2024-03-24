import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/customers');
        setCustomers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCustomers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.mobileNumber}</td>
              {/* Render other customer details */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
