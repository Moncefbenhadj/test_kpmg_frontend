import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <img src='https://iconape.com/wp-content/png_logo_vector/kpmg-logo.png' width='100px'></img>'
      <h1 className="mt-5 mb-4">Bienvenue</h1>
      <h5 className="mt-5 mb-4 mb-5">Veuillez séléctionner une vue en cliquant sur le bouton :  </h5>
      <div className="row">
        <div className="col-4 mb-4">
        <p className='fw-bold'>Vue 1 :</p>
          <p>o Créer un ticket en renseignant les champs : Intitulé du ticket, description du travail demandé, deadline.<br/><br/>
          o Consulter une liste de tickets par état.</p><br/><br/>
          <Link to={`/vuefr`} className="btn btn-primary btn-block">
            Vue FR
          </Link>
        </div>

        <div className="col-4 mb-4">
          <p className='fw-bold'>Vue 2 :</p>
          <p>o Consulter la liste des tickets<br/><br/>
          o Prendre un ticket<br/><br/>o Envoyer un ticket avec une pièce jointe et des remarques</p><br/>
          <Link to={`/vuedz`} className="btn btn-primary btn-block">
            Vue DZ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;