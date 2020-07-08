import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Custom Components
import RotatingIcon from '../RotatingIcon';
import SectionTitle from '../SectionTitle';

// Icons
import { FaBook, FaEye, FaHeart } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

import './styles.css';

const About = () => {
    const items = [
        {
            Icon: FaBook,
            title: 'Missão',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            Icon: FaEye,
            title: 'Visão',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            Icon: FaHeart,
            title: 'Valores',
            type: 'list',
            content: ['Loren', 'Ipsum', 'Dolor', 'Sit', 'Amet'],
        },
    ];

    return (
        <Element name="about" className="about-section">
            <Container as="main" className="text-center">
                <Row>
                    <SectionTitle>Quem Somos</SectionTitle>
                    <p className="subtitle">
                        In non augue maximus, tempus metus ut, fringilla urna.
                        Aenean vitae ipsum odio. Vestibulum ultricies malesuada
                        viverra. Ut in euismod tortor. Suspendisse lacinia
                        lectus non nisl tristique, vel volutpat dolor maximus.
                    </p>
                </Row>
                <Row className="items-row">
                    {items.map(item => (
                        <Col
                            md="4"
                            key={item.title}
                            className="rotation-activator d-flex flex-row"
                        >
                            <div>
                                <RotatingIcon
                                    title={`${item.title} da empresa`}
                                    Icon={item.Icon}
                                />
                            </div>
                            <div className="item-box-info">
                                <h4>{item.title}</h4>
                                {item.type === 'list' ? (
                                    <ul>
                                        {item.content.map((listItem, index) => (
                                            <li key={`list-item-${index}`}>
                                                {listItem}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{item.content}</p>
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Element>
    );
};

export default About;
