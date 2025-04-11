import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes></AllRoutes>
      <Footer />
    </div>
  );
}

export default App;
