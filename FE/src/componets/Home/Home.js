import React from 'react';
import Register from '../Register/Register'
import MainNavbar from '../MainNavbar'
const Home = ({history}) => {
    return (
        <>
        <MainNavbar history={history}/>
        <Register history={history}/>
        
        </>
    );
};

export default Home; 