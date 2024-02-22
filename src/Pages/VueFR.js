import React from 'react';
import TicketForm from '../Components/TicketForm';
import TicketList from '../Components/TicketList';
const VueFR = () => {
  return (
    <div className="container">
      <h1>Vue numéro 1 (Assistante FR)</h1>
      <div className="row">
        <div className="col-md-6">
          <TicketList vue='FR'/>
        </div>
        <div className="col-md-6 mt-4">
          <TicketForm />
        </div>
      </div>
    </div>
  );
};

export default VueFR;