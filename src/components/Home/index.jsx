import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Contexts
import { useImage } from '../../contexts/Data';

// React Scroll
import { Element } from 'react-scroll';

// Assets
import logo from '../../assets/img/logo_big.png';

import './styles.css';

const Home = () => {
    const { homeImage } = useImage();

    return (
        <Element className="home-section" name="home" style={homeImage}>
            <Container as="section">
                <Row>
                    <Col md="12" className="text-center">
                        <div className="header-text">
                            <picture>
                                <img
                                    src={logo}
                                    width="270"
                                    height="270"
                                    alt="Logo"
                                />
                            </picture>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

export default Home;
