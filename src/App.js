import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className='header'>
            <div className='logo_icon'/>
            <div className='logo_find'/>
            <ul>
              <li><NavLink id="about" to="/">О Нас</NavLink></li>
              <li><NavLink to="/">Врачи</NavLink></li>
              <li><NavLink to="/">Пациентам</NavLink></li>
              <li><NavLink id="contacts" to="/contacts">Контакты</NavLink></li>
              <li><NavLink to="/">Отзывы</NavLink></li>  
            </ul>
            <div className='logo_eye' />
            <div>
              <p className='phone'>8 (8452) 38-44-28</p>
              <p className='mail'>saratov@ood2.ru</p>
            </div>
            <button className='enroll'>Записаться</button>
          </div>
        </header>
        <div className='content'>
          <Routes>
                  <Route path='/' element={<Main/>} />
                  <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
        </div>
      </div>
      <footer>
        <div className='footer'>
          <div className='footer_left'>
            <p>2022 © ГУЗ «Областной клинический онкологический диспансер»</p>
            <p className='red_text'>Политика конфиденциальности</p>
          </div>
          <div className='footer_right'>
            <div className='logo_tg' />
            <div className='logo_vk' />
            <div className='logo_yt' />
            <p>Разработка сайта</p>
            <div className='logo_spaceapp' />
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
