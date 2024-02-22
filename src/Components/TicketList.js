import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TicketList.css'

const TicketList = (props) => {
  const [tickets, setTickets] = useState([]);
  const [filtre, setFiltre] = useState('open'); // État par défaut  'open'

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('https://test-kpmg-backend.onrender.com/ticket');
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.error('Erreur lors de la récupération des tickets');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des tickets :', error);
      }
    };

    fetchTickets();
  }, [filtre]);

  function formatISODate(isoDateString) {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

  return (        
    <div className="container">
      <h2 className="my-4">Liste des tickets</h2>
     
      <div className="btn-group mb-4">
        <button
          className={`btn ${filtre === 'open' ? 'btn-success' : 'btn-secondary'}`}
          onClick={() => setFiltre('open')}
        >
          Tickets Ouverts
        </button>
        <button
          className={`btn ${filtre === 'closed' ? 'btn-danger' : 'btn-secondary'}`}
          onClick={() => setFiltre('closed')}
        >
          Tickets Fermés
        </button>
      </div>

      <ul className="list-group">
        {tickets.length !== 0 ? tickets.map(ticket => (
          ticket.etat === filtre &&
          <li key={ticket.id} className="list-group-item">
            <div>
              <h3 className="mb-3 titre">
                <Link to={`/tickets/${ticket._id}/${props.vue}`} className="text-decoration-none">
                  {ticket.intitule}
                </Link>
              </h3>
              <h5 className="mb-2 desc"><b className='text-decoration-underline'>Description:</b> {ticket.description}</h5>
              <h5 className="mb-0"><b className='text-decoration-underline'>Deadline:</b > {formatISODate(ticket.deadline)}</h5>
            </div>
          </li>
        )) : <p>Il n'ya aucun ticket pour l'instant</p>}
      </ul>
    </div>
  );
};

export default TicketList;