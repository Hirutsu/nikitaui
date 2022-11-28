import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';

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
