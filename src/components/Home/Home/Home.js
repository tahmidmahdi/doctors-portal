import React from 'react';
import Blog from '../Blog/Blog';
import ContractUs from '../ContractUs/ContractUs';
import Doctors from '../Doctors/Doctors';

import ExceptionalService from '../ExceptionalService/ExceptionalService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Doctors></Doctors>
            <ContractUs></ContractUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;