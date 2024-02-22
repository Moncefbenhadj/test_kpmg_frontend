import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const TicketDetails2 = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [etat, setetat] = useState('');
    //const [attachment, setAttachment] = useState(null);

    useEffect(() => {
        const fetchTicketDetails = async () => {
            try {
                const response = await fetch(`https://test-kpmg-backend.onrender.com/ticket/${id}`);
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

    function formatISODate(isoDateString) {
        const date = new Date(isoDateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    return (
        <div className="card container">
            <Link to='/'><img src='https://iconape.com/wp-content/png_logo_vector/kpmg-logo.png' width='100px'></img></Link>            <div className='card-body '>
            <h2 className=' card-title'><b className='text-decoration-underline'>Intitulé du ticket:</b> {ticket.intitule}</h2>
            <h2 className=''><b className='text-decoration-underline'>Deadline:</b> {formatISODate(ticket.deadline)}</h2>
            <h2  className={`my-4 ${ticket.etat == 'open' ? 'text-success' : 'text-danger'}`} ><b className='text-decoration-underline text-black'>Etat:</b> {ticket.etat} </h2>
            <h2 className='text-decoration-underline'><b>Description:</b> </h2>
            <h4 className="my-4">{ticket.description}</h4>
            
            <h2 className='text-decoration-underline'>{ticket.remarks !== '' ? 'Remarques :' : ''} </h2>
            <h4 className="my-4">{ticket.remarks}</h4>
            </div>
        </div>

    );
};

export default TicketDetails2;
