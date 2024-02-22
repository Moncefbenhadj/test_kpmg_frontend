import React from 'react';
import TicketList from '../Components/TicketList';
import { Link } from 'react-router-dom';


const VueDZ = () => {
  return (
    <div className="container">
      <Link to='/'><img src='https://iconape.com/wp-content/png_logo_vector/kpmg-logo.png' width='100px'></img></Link>'
      <h1>Vue numéro 2 (Assistante DZ)</h1>
      <div className="row">
        <div className="col-md-12 ">
          <TicketList vue='DZ'/>
        </div>
        
      </div>
    </div>
  );
};

export default VueDZ;