import {NavLink} from 'react-router-dom';
import ModalRecord from '../Modal/Modal';


function Header() {
    return (
            <div className='header'>
                <NavLink to="/"><img src="/images/logo.png" className='logo_icon'/></NavLink>
                <img src="/images/logo_find.png" className='logo_find'/>
                <ul className='header_ul'>
                    <li><NavLink to="/about">О Нас</NavLink></li>
                    <li><NavLink to="/doctors">Врачи</NavLink></li>
                    <li><NavLink to="/patients">Пациентам</NavLink></li>
                    <li><NavLink id="contacts" to="/contacts">Контакты</NavLink></li>
                    <li><NavLink to="/reviews">Отзывы</NavLink></li>  
                </ul>
                <img src="/images/logo_eye.png" className='logo_eye' />
                <div>
                    <p className='phone'>8 (8452) 38-44-28</p>
                    <p className='mail'>saratov@ood2.ru</p>
                </div>        
                <ModalRecord />
            </div>
    );
  }
  
  export default Header;