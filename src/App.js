import './App.css';
import Head from './components/Head';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Head />
          <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
