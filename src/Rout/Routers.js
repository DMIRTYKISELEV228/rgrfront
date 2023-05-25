import React from 'react';
import Header from '../Components/Header';
import About from '../Pages/About';
import Contacts from '../Pages/Club/Contacts';
import Blog from '../Pages/Press/Blog';
import Registration from '../Components/ModalWindows/Registration';
import Comand from '../Pages/Comand/Comand'
import Sponsors from '../Pages/Club/Sponsors'
import Guide from '../Pages/Club/Guide'
import Staff from '../Pages/Comand/Staff'
import New from '../Pages/Press/New'
import News from '../Pages/Press/News'
import CoachingStaff from '../Pages/Comand/СoachingStaff'
import TSO from '../Pages/Bilet/TSO';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import SeasonTickets from '../Pages/Bilet/SeasonTickets';

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

                <Route path='/tso' element={<TSO />} />
                <Route path='/seasontickets' element={<SeasonTickets />} />
                <Route path='/roc' element={<News />} />
                <Route path='/lds' element={<News />} />
            </Routes>
        </Router>

    );
}


export default Routers;