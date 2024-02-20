import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer la liste des tickets depuis le serveur
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:3000/ticket');
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setTickets(data);
        } else {
          console.error('Erreur lors de la récupération des tickets');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des tickets :', error);
      }
    };

    // Appel de la fonction pour récupérer les tickets lors du chargement du composant
    fetchTickets();
  },[]);

  return (
    <div className="container">
      <h2 className="my-4">Liste des tickets</h2>
      <ul className="list-group">
        {tickets.sort().map(ticket => (
          <li key={ticket.id} className="list-group-item">
            
            <div>
            <h3 className="mb-3"><Link to={`/tickets/${ticket._id}`}>
            {ticket.intitule}</Link></h3>
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