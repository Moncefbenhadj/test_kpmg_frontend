import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TicketDetails2 = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [etat, setetat] = useState('');
    //const [attachment, setAttachment] = useState(null);

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/ticket/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setTicket(data);
                    setRemarks(data.remarks);
                    setetat(data.etat);
                } else {
                    console.error('Erreur lors de la récupération des détails du ticket');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des détails du ticket :', error);
            }
        };

        fetchTicketDetails();
    }, [id]);

    

    if (!ticket) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card container">
            <div className='card-body text-center'>
            <h2 className='text-decoration-underline card-title'>Intitulé : </h2>
            <h4 className="my-4">{ticket.intitule}</h4>
            <h2 className='text-decoration-underline'>Description : </h2>
            <h4 className="my-4">{ticket.description}</h4>
            <h2 className='text-decoration-underline'>Deadline : </h2>
            <h4 className="my-4">{ticket.deadline}</h4>
            <h2 className='text-decoration-underline'>Etat : </h2>
            <h4 className={`my-4 ${ticket.etat == 'open' ? 'text-success' : 'text-danger'}`}>{ticket.etat}</h4>
            <h2 className='text-decoration-underline'>{ticket.remarks !== '' ? 'Remarques :' : ''} </h2>
            <h4 className="my-4">{ticket.remarks}</h4>
            </div>
        </div>

    );
};

export default TicketDetails2;
