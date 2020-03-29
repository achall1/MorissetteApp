import React from 'react';
import Header from './header'
import { BrowserRouter } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to the home page</h1>
        </div>
    )
}

export default Home;