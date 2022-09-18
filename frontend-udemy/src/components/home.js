import React from 'react';
import Navbar from './navbar'
import Footer from './footer'
import Dashboard from './dashboard'
const home = () => {
    return (
        <div>
            <Navbar />
            <Dashboard />
            <Footer />
        </div>
    );
};

export default home;