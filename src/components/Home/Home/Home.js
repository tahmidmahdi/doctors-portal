import React from 'react';
import Appointment from '../Appointment/Appointment';
import ExceptionalService from '../ExceptionalService/ExceptionalService';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;