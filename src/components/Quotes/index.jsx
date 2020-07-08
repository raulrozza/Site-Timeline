import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';

// Context
import { useImage } from '../../contexts/Data';

// Carousel
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import './styles.css';

const Quotes = () => {
    // Controls the amout of items
    const responsive = {
        standard: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
        },
    };

    const { quotesImage } = useImage();

    const quoteList = [
        {
            key: 0,
            text:
                '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit".',
            author: 'Lorem ipsum',
        },
        {
            key: 1,
            text:
                '"Quisque condimentum semper risus quis porta. Nulla lectus sem, blandit vel bibendum eget, scelerisque posuere nibh.".',
            author: 'Lorem ipsum',
        },
    ];

    return (
        <section className="quotes-section" style={quotesImage}>
            <div>
                <Container>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={10000}
                        customTransition="all 1s"
                        arrows={false}
                    >
                        {quoteList.map(quote => (
                            <blockquote
                                key={`quote-${quote.key}`}
                                className="single-quote text-center"
                            >
                                <p>{quote.text}</p>
                                <footer>
                                    <cite title="Source">{quote.author}</cite>
                                </footer>
                            </blockquote>
                        ))}
                    </Carousel>
                </Container>
            </div>
        </section>
    );
};

export default Quotes;
