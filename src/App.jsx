import React from 'react';
import { Helmet } from 'react-helmet';

// Assets
import logo from './assets/img/logo_big.png';

// Routes
import Routes from './routes/index.routes';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <>
        <Helmet>
            <link
                href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&amp;subset=devanagari,latin-ext"
                rel="stylesheet"
            />
            <link rel="apple-touch-icon" href={logo} />
        </Helmet>
        <Routes />
    </>
);

export default App;
