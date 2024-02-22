import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TicketList.css'

const TicketList = (props) => {
  const [tickets, setTickets] = useState([]);
  const [filtre, setFiltre] = useState('open'); // État par défaut  'open'

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/ticket');
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
        {tickets.map(ticket => (
          ticket.etat === filtre &&
          <li key={ticket.id} className="list-group-item">
            <div>
              <h3 className="mb-3">
                <Link to={`/tickets/${ticket._id}/${props.vue}`} className="text-decoration-none">
                  {ticket.intitule}
                </Link>
              </h3>
              <p className="mb-2">{ticket.description}</p>
              <p className="mb-0">Deadline : {ticket.deadline}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;