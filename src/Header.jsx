import {NavLink} from 'react-router-dom';


function Header() {
    return (
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
    );
  }
  
  export default Header;