import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import './styles.css';

const TimelineItem = ({ title, quotes, directors, members }) => {
    const [shown, setShown] = useState(false);

    return (
        <div className="timeline-item">
            <header>
                <h3>{title}</h3>
                <div className="quotes-container">
                    {quotes.map((quote, index) => (
                        <blockquote
                            className="quote"
                            key={`${title}-quote-${index}`}
                        >
                            <cite>
                                <FaQuoteLeft />
                                <span>{quote.text}</span>
                                <FaQuoteRight />
                            </cite>
                            <footer>{quote.author}</footer>
                        </blockquote>
                    ))}
                </div>
                <div className="button-container">
                    <button onClick={() => setShown(!shown)}>
                        Integrantes
                    </button>
                </div>
            </header>
            <section className={`timeline-content ${shown ? 'shown' : ''}`}>
                <div className="directors">
                    <h3>Diretoria</h3>
                    <div className="item-container">
                        {directors.map((director, index) => (
                            <div
                                className="item"
                                key={`${title}-${director.index}-${index}`}
                            >
                                <div className="border">
                                    <div className="wrapper">
                                        <div className="content">
                                            <img
                                                src={director.img}
                                                alt={director.name}
                                            />
                                            <div>
                                                <p>{director.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span>{director.job}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="members">
                    <h3>Assessoria</h3>
                    <div className="item-container">
                        {members.map((member, index) => (
                            <div
                                className="item"
                                key={`${title}-${member.index}-${index}`}
                            >
                                <div className="border">
                                    <div className="wrapper">
                                        <div className="content">
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
                                <span>{member.job}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    quotes: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }),
    ),
    directors: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            job: PropTypes.string.isRequired,
        }),
    ),
    members: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            job: PropTypes.string.isRequired,
        }),
    ),
};

TimelineItem.defaultProps = {
    quotes: [],
    directors: [],
    members: [],
};

export default TimelineItem;
