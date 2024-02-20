
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TicketDetails = () => {
    let location = useLocation()
    let id = location.pathname.split("tickets/")[1] // Bricolage a refaire (Manque de temps pour debug)
    const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Récupérer les détails du ticket depuis le serveur en utilisant l'ID du ticket dans les paramètres de l'URL
    const fetchTicketDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/ticket/${id}`);
        if (response.ok) {
          const data = await response.json();
          setTicket(data);
        } else {
          console.error('Erreur lors de la récupération des détails du ticket');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du ticket :', error);
      }
    };

    fetchTicketDetails();
  },[id]);

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2 className="my-4">{ticket.title}</h2>
      <p className="mb-3">{ticket.description}</p>
      <p className="mb-0">Deadline : {ticket.deadline}</p>
    </div>
  );
};

export default TicketDetails;