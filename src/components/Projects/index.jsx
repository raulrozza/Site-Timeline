import React from 'react';

// Assets
import placeholder from '../../assets/img/portfolio/placeholder.png';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Carousel
import Carousel from 'react-multi-carousel';

// Custom Components
import ProjectItem from '../ProjectItem';
import SectionTitle from '../SectionTitle';

// React Scroll
import { Element } from 'react-scroll';

import 'react-multi-carousel/lib/styles.css';
import './styles.css';

const Services = () => {
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

    const projectList = [
        {
            key: 1,
            image: placeholder,
            title: 'Projeto',
            content: 'Item do Portfolio.',
            link: '/',
        },
        {
            key: 2,
            image: placeholder,
            title: 'Projeto',
            content: 'Item do Portfolio.',
            link: '/',
        },
        {
            key: 3,
            image: placeholder,
            title: 'Projeto',
            content: 'Item do Portfolio.',
            link: '/',
        },
        {
            key: 4,
            image: placeholder,
            title: 'Projeto',
            content: 'Item do Portfolio.',
            link: '/',
        },
    ];

    return (
        <Element name="projects" className="projects-section">
            <Container as="section" className="text-center">
                <Row className="mb-4">
                    <SectionTitle>Nossos Projetos</SectionTitle>
                    <p className="subtitle w-100">
                        Suspendisse lacinia lectus non nisl tristique, vel
                        volutpat dolor maximus.
                    </p>
                </Row>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={10000}
                    customTransition="all 1s"
                    arrows={false}
                >
                    {projectList.map(project => {
                        if (project.link)
                            return (
                                <a
                                    key={`project-${project.key}`}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ProjectItem {...project} />
                                </a>
                            );
                        else return <ProjectItem {...project} />;
                    })}
                </Carousel>
            </Container>
        </Element>
    );
};

export default Services;
