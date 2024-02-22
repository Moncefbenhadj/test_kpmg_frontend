import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashbord';
import TicketDetails from './Components/TicketDetails';
import TicketList from './Components/TicketList';
import VueFR from './Pages/VueFR';
import VueDZ from './Pages/VueDZ';
import TicketDetails2 from './Components/TicketDetails2';
 
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/tickets/:id/DZ" element={<TicketDetails />}/>
                <Route path="/tickets/:id/FR" element={<TicketDetails2 />}/>
                <Route path="/liste" element={<TicketList/>}/>
                <Route path="/vuefr" element={<VueFR/>}/>
                <Route path="/vuedz" element={<VueDZ/>}/>
            </Routes>
        </Router>    
    );
}

export default App;
