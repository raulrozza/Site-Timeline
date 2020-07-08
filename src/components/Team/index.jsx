import React from 'react';
import { Link } from 'react-router-dom';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Contexts
import { useTeam } from '../../contexts/Data';

// Custom Components
import SectionTitle from '../SectionTitle';

// React Scroll
import { Element, animateScroll } from 'react-scroll';

import './styles.css';

const Team = () => {
    const teamList = useTeam();

    return (
        <Element name="team" className="team-section">
            <Container as="section">
                <Row className="mb-4">
                    <SectionTitle>Nossa Equipe</SectionTitle>
                    <p className="subtitle w-100 text-center">
                        Suspendisse lacinia lectus non nisl tristique, vel
                        volutpat dolor maximus.
                    </p>
                </Row>
                <Row>
                    {teamList.map(member => (
                        <Col
                            sm="4"
                            md="3"
                            lg="2"
                            className={`${member.className || ''} team-column`}
                            key={member.name}
                        >
                            <div className="team-item">
                                <div className="team-triangle">
                                    <div className="team-content">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                        />
                                        <div>
                                            <p>{member.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row className="history">
                    <Link
                        onClick={() => animateScroll.scrollToTop()}
                        to="/timeline"
                    >
                        Confira a nossa história
                    </Link>
                </Row>
            </Container>
        </Element>
    );
};

export default Team;
