import {Route, Routes } from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';

function Content() {
    return(
        <div className='content'>
            <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

export default Content;