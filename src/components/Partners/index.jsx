import React from 'react';

// Assets
import placeholder from '../../assets/img/partners/placeholder.png';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Carousel
import Carousel from 'react-multi-carousel';

// Custom Components
import SectionTitle from '../SectionTitle';

import 'react-multi-carousel/lib/styles.css';
import './styles.css';

const Partners = () => {
    // Controls the amout of items
    const responsive = {
        standard: {
            breakpoint: { max: 4000, min: 991 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 991, min: 767 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };

    const partnersList = [
        {
            key: 1,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
        {
            key: 2,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
        {
            key: 3,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
        {
            key: 4,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
        {
            key: 5,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
        {
            key: 6,
            image: placeholder,
            title: 'Parceiro',
            link: '/',
        },
    ];

    return (
        <section className="partners-section">
            <Container className="text-center">
                <Row className="mb-4">
                    <SectionTitle>Parceiros</SectionTitle>
                </Row>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    customTransition="all 1s"
                    arrows={false}
                >
                    {partnersList.map(partner => (
                        <a
                            key={`partner-${partner.key}`}
                            href={partner.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <picture>
                                <img src={partner.image} alt={partner.title} />
                            </picture>
                        </a>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
};

export default Partners;
