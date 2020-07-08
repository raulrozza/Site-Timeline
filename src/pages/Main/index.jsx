import React from 'react';
import { Helmet } from 'react-helmet';

// Custom Components
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Join from '../../components/Join';
import NavBar from '../../components/NavBar';
import Partners from '../../components/Partners';
import Projects from '../../components/Projects';
import Quotes from '../../components/Quotes';
import Services from '../../components/Services';
import Team from '../../components/Team';

const Main = () => {
    return (
        <>
            <Helmet>
                <title>Modelo - Site com Timeline</title>
                <meta
                    name="description"
                    content="Um modelo de site institucional, com uma página com timeline."
                />
            </Helmet>
            <NavBar />
            <Home />
            <About />
            <Services />
            <Quotes />
            <Projects />
            <Team />
            <Partners />
            <Join />
            <Contact />
            <Footer />
        </>
    );
};

export default Main;
