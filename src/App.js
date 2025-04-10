import './App.css';
import { AllRoutes } from './routes/AllRoutes';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className="dark">
      <Header />
        <AllRoutes></AllRoutes>
      <Footer />
    </div>
  );
}

export default App;
