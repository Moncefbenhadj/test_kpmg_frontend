import React from 'react';
import TicketList from '../Components/TicketList';

const VueDZ = () => {
  return (
    <div className="container">
      <h1>Vue numéro 2 (Assistante DZ)</h1>
      <div className="row">
        <div className="col-md-12 text-center">
          <TicketList vue='DZ'/>
        </div>
        
      </div>
    </div>
  );
};

export default VueDZ;