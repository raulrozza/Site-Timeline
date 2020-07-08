import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Contexts
import { useData } from '../../contexts/Data';

// Components
import SectionTitle from '../../components/SectionTitle';
import TimelineItem from '../../components/TimelineItem';

// Libs
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './styles.css';

const viewArray = ['1-column', '2-columns'];

const Timeline = () => {
    const [viewMode, setViewMode] = useState(1);
    const { timeline } = useData();

    return (
        <>
            <Helmet>
                <title>Linha do Tempo - Modelo</title>
                <meta
                    name="description"
                    content="Uma linha do tempo que mostra informações variadas."
                />
            </Helmet>
            <main className="timeline-container">
                <div className="container">
                    <SectionTitle variant="secondary">
                        Linha do Tempo
                    </SectionTitle>
                    <div className="go-back">
                        <Link to="/">Voltar</Link>
                    </div>
                    <VerticalTimeline layout={viewArray[viewMode]}>
                        {timeline.map(element => (
                            <VerticalTimelineElement
                                key={element.title}
                                iconStyle={{
                                    background: 'var(--primary)',
                                }}
                                textClassName={viewMode === 1 ? 'two' : 'one'}
                            >
                                <TimelineItem {...element} />
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div
                    title="Alternar visualização"
                    className={`toggle-view-button ${
                        viewMode === 1 ? 'two' : 'one'
                    }`}
                    tabIndex={0}
                    onClick={() => setViewMode(Number(!viewMode))}
                />
            </main>
        </>
    );
};

export default Timeline;
