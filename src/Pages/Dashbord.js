import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Link to={`/vuefr`} className="btn btn-primary btn-block">
            Vue FR
          </Link>
        </div>
        <Link  to={`/vuedz`} className=" col-md-4 mb-4 text-decoration-none"><div className="card">
          <br/>
          <div className="text-warning">
          <p className="text-center">Vue 2 :<br/>
        o Consulter la liste des tickets<br/>
        o Prendre un ticket</p></div>
        </div></Link>
      </div>
    </div>
  );
};

export default Dashboard;