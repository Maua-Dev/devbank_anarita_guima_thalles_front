import Navbar from './components/Nav/navbar';
import Home from './pages/home';
import Transactions from './pages/transactions';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Transactions />
    </div>
  );
}

export default App;
