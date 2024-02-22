import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TicketDetails = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [remarks, setRemarks] = useState('');
    const [etat, setetat] = useState('');
    const [attachment, setAttachment] = useState(null);

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
            const response = await fetch(`http://localhost:3000/ticket/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(changement)
            });
            if (response.ok) {
                console.log('Ticket modifier')
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

    return (
        <div className="container">
            <h2 className="my-4">{ticket.intitule}</h2>
            <h2 className="my-4">{ticket.description}</h2>
            <h2 className="my-4">{ticket.deadline}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="remarks">Remarques :</label>
                    <textarea className="form-control" id="remarks" value={remarks} onChange={handleRemarksChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="status">État du ticket :</label>
                    <select className="form-control" id="status" value={etat} onChange={handleTicketStatusChange}>
                        <option value="open">Ouvert</option>
                        <option value="closed">Fermé</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="attachment">Pièce jointe :</label>
                    <input type="file" className="form-control-file" id="attachment" onChange={handleAttachmentChange} />
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer les modifications</button>
            </form>
        </div>
    );
};

export default TicketDetails;
