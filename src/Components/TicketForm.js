
import React, { useState } from 'react';
import './TicketForm.css' ; 

const TicketForm = () => {
  const [intitule, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Envoi des données au serveur pour créer un nouveau ticket
      const response = await fetch('http://localhost:3000/ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ intitule, description, deadline }),
      });
      if (response.ok) {
        console.log('Ticket créé avec succès');
        // Réinitialiser le formulaire après la création du ticket
        setTitle('');
        setDescription('');
        setDeadline('');
      } else {
        console.error('Échec de la création du ticket');
      }
    } catch (error) {
      console.error('Erreur lors de la création du ticket :', error);
    }
  };

  return (
    <div className="container">
      <h2>Créer un nouveau ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Titre :</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={intitule}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description :</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Date limite :</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary col-4 mb-3">Créer le ticket</button>
      </form>
    </div>
  );
};

export default TicketForm;