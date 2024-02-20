import React from 'react';
import TicketForm from '../Components/TicketForm';
import TicketList from '../Components/TicketList';
const Dashboard = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <TicketForm />
        </div>
        <div className="col-md-6">
          <TicketList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;