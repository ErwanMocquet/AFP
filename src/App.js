import './css/index.css';
import './css/navbar.css';
import {Route, Routes, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import PortfolioPage from './pages/PortfolioPage';
import ProcedurePage from './pages/ProcedurePage';
import SomeSayPage from './pages/SomeSayPage';
import ContactPage from './pages/ContactPage';
import ConsultationPageOne from './pages/ConsultationPageOne';
import ConsultationPageTwo from './pages/ConsultationPageTwo';
import ConsultationPageFinal from './pages/ConsultationPageFinal';
//import NavBar from './components/NavBar';



function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='portfolio' element={<PortfolioPage/>}/>
        <Route path='procedure' element={<ProcedurePage/>}/>
        <Route path='somesay' element={<SomeSayPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='consultation' element={<ConsultationPageOne />}/>
        <Route path='consultationtwo' element={<ConsultationPageTwo />}/>
        <Route path='consultationfinal' element={<ConsultationPageFinal />}/>
        <Route path='*' element={<Navigate to="/home"/>} />
      </Routes>
    </main>
  );
}

export default App;
