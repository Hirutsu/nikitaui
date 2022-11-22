import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
