import Navbar from './components/Nav/navbar';
import Home from './pages/home';
import Transactions from './pages/transactions';
import Deposit from './pages/deposit';
import Withdraw from './pages/withdraw';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
