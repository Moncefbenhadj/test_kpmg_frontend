import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const TicketDetails = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [etat, setetat] = useState('');
    const [attachment, setAttachment] = useState(null);

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

    const handleRemarksChange = (e) => {
        setRemarks(e.target.value);
    };

    const handleTicketStatusChange = (e) => {
        setetat(e.target.value);
    };

    const handleAttachmentChange = (e) => {
        setAttachment(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            let changement = {etat, attachment, remarks}
            console.log(changement)
            try {
                console.log('requete')
            const response = await fetch(`https://test-kpmg-backend.onrender.com/ticket/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(changement)
            });
            if (response.ok) {
                alert('Ticket validé')
            } else {
                console.error('Erreur lors de la mise à jour du ticket');
            }
        } catch (error) {
            console.error('Erreur lors de la mise à jour du ticket :', error);
        }
    };

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
        <div className="container">
            <Link to='/'><img src='https://iconape.com/wp-content/png_logo_vector/kpmg-logo.png' width='100px'></img></Link>
            <h2 className="my-4"><b className='text-decoration-underline'>Intitulé du ticket:</b>  {ticket.intitule}</h2>
            <h2 className="my-4"><b className='text-decoration-underline'>Deadline:</b> {formatISODate(ticket.deadline)}</h2>
            <h2 className="my-4"><b className='text-decoration-underline'>Description:</b></h2>
            <h5 className="my-4 text-secondary">{ticket.description}</h5>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="remarks"><b className='text-decoration-underline'>Remarque:</b></label>
                    <textarea className="form-control" id="remarks" value={remarks} onChange={handleRemarksChange}></textarea>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="status"><b className='text-decoration-underline'>Etat du ticket:</b><br/></label>
                    <select className="form-control" id="status" value={etat} onChange={handleTicketStatusChange}>
                        <option value="open">Ouvert</option>
                        <option value="closed">Fermé</option>
                    </select>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="attachment">Pièce jointe :</label>
                    <input type="file" className="form-control-file" id="attachment" onChange={handleAttachmentChange} />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Valider le ticket</button>
            </form>
        </div>
    );
};

export default TicketDetails;
