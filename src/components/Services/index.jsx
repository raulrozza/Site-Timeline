import React from 'react';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Custom Components
import RotatingIcon from '../RotatingIcon';
import SectionTitle from '../SectionTitle';

// Icons
import { FaCheckCircle } from 'react-icons/fa';

// React Scroll
import { Element } from 'react-scroll';

import './styles.css';

const Services = () => {
    const items = [
        {
            Icon: FaCheckCircle,
            title: 'Serviço',
            content: 'Descrição do Serviço.',
        },
        {
            Icon: FaCheckCircle,
            title: 'Serviço',
            content: 'Descrição do Serviço.',
        },
        {
            Icon: FaCheckCircle,
            title: 'Serviço',
            content: 'Descrição do Serviço.',
        },
    ];

    return (
        <Element name="services" className="services-section">
            <Container as="section" className="text-center">
                <Row>
                    <SectionTitle>Serviços</SectionTitle>
                    <p className="subtitle">
                        Curabitur ultricies luctus porta. In vel nisi luctus
                        lectus mattis volutpat. Nunc dapibus fringilla risus in
                        varius. Praesent sapien mauris, porttitor eget blandit
                        sed, dictum sed orci. Proin elementum accumsan
                        fermentum.
                    </p>
                </Row>
                <Row className="items-row justify-content-center">
                    {items.map((item, index) => (
                        <Col
                            key={`${item.title}-${item.index}`}
                            sm="6"
                            md="4"
                            className="rotation-activator d-flex flex-column align-items-center"
                        >
                            <div>
                                <RotatingIcon
                                    size={{ width: '75px', height: '75px' }}
                                    title={item.title}
                                    Icon={item.Icon}
                                />
                            </div>
                            <div className="item-box-info">
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Element>
    );
};

export default Services;
