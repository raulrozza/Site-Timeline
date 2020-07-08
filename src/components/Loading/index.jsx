import React from 'react';
import ReactLoading from 'react-loading';

import './styles.css';

const Loading = () => (
    <div className="loading-container">
        <ReactLoading color="var(--primary)" type="spin" />
    </div>
);

export default Loading;
