import {Route, Routes } from 'react-router-dom';
import Main from './Main';
import Contacts from './Contacts';
import ForPatients from './ForPatients';
import Error from './Error';
import About from './About';
import Reviews from './Reviews';

function Content() {
    return(
        <div className='content'>
            <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/patients' element={<ForPatients/>}/>
                    <Route path='/error' element={<Error/>}/>
                    <Route path='/reviews' element={<Reviews/>}/>
            </Routes>
        </div>
    );
}

export default Content;