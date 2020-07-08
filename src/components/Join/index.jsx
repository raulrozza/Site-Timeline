import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Custom Components
import RotatingIcon from '../RotatingIcon';
import SectionTitle from '../SectionTitle';

import './styles.css';

const Join = () => {
    const icons = [
        {
            Icon: FaFacebookF,
            title: 'Facebook',
            link: 'https://www.facebook.com',
        },
        {
            Icon: FaInstagram,
            title: 'Instagram',
            link: 'https://www.instagram.com',
        },
        {
            Icon: FaLinkedinIn,
            title: 'Linkedin',
            link: 'https://www.linkedin.com',
        },
    ];

    return (
        <section className="join-section">
            <Container className="text-center">
                <Row className="mb-4">
                    <SectionTitle>Fique por Dentro</SectionTitle>
                    <p className="subtitle w-100">Siga nossas redes sociais!</p>
                </Row>
                <Row className="justify-content-center">
                    {icons.map(icon => (
                        <a
                            key={icon.title}
                            href={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={icon.title}
                        >
                            <RotatingIcon
                                Icon={icon.Icon}
                                title={`${icon.title} da EJEC`}
                            />
                        </a>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Join;
