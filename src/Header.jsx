import {NavLink} from 'react-router-dom';


function Header() {
    return (
            <div className='header'>
                <NavLink to="/"><div className='logo_icon'/></NavLink>
                <div className='logo_find'/>
                <ul className='header_ul'>
                    <li><NavLink to="/about">О Нас</NavLink></li>
                    <li><NavLink to="/doctors">Врачи</NavLink></li>
                    <li><NavLink to="/patients">Пациентам</NavLink></li>
                    <li><NavLink id="contacts" to="/contacts">Контакты</NavLink></li>
                    <li><NavLink to="/reviews">Отзывы</NavLink></li>  
                </ul>
                <div className='logo_eye' />
                <div>
                    <p className='phone'>8 (8452) 38-44-28</p>
                    <p className='mail'>saratov@ood2.ru</p>
                </div>
                <button className='enroll'>Записаться</button>
            </div>
    );
  }
  
  export default Header;