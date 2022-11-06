import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Fullpage,{FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import main_1 from './main_1.png'
import main_2 from './main_2.png'
import main_3 from './main_3.png'
import main_4 from './main_4.png'
import main_5 from './main_5.png'
import main_6 from './main_6.png'
import main_7 from './main_7.png'
import main_8 from './main_8.png'
import main_9 from './main_9.png'

function App() {
  return (
    <BrowserRouter>
      <Fullpage>
        <FullpageNavigation/>
        <FullPageSections>
          
          <FullpageSection style={{backgroundImage: `url(${main_1})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_2})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_3})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_4})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_5})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_6})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_7})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_8})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

          <FullpageSection style={{backgroundImage: `url(${main_9})`, backgroundSize: 'cover'}}>
            <Header />
            <Content />
            <Footer />
          </FullpageSection>

        </FullPageSections>
      </Fullpage>
    </BrowserRouter>
  );
}

export default App;
