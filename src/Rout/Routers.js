import React from 'react';
import Header from '../Components/Header';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import Registration from '../Pages/Registration';
import Comand from '../Pages/Comand'
import Sponsors from '../Pages/Sponsors'
import Guide from '../Pages/Guide'
import Staff from '../Pages/Staff'
import New from '../Pages/New'
import News from '../Pages/News'
import CoachingStaff from '../Pages/СoachingStaff'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

function Routers() {


    return (

        <Router>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/comand' element={<Comand />} />
                <Route path='/sponsors' element={<Sponsors />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/coachingstaff' element={<CoachingStaff />} />
                <Route path='/staff' element={<Staff />} />
                <Route path='/new' element={<New />} />
                <Route path='/news' element={<News />} />
            </Routes>
        </Router>

    );
}


export default Routers;