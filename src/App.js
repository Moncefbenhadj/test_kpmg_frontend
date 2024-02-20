import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashbord';
import TicketDetails from './Components/TicketDetails';
import TicketList from './Components/TicketList';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/tickets/:id" element={<TicketDetails />}/>
                <Route path="/liste" element={<TicketList/>}/>
            </Routes>
        </Router>    
    );
}

export default App;
