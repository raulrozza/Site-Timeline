import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const SectionTitle = ({ variant, children }) => {
    let color;
    switch (variant) {
        case 'white':
            color = 'var(--text-contrast)';
            break;
        case 'black':
            color = '#000';
            break;
        case 'primary':
            color = 'var(--primary)';
            break;
        case 'secondary':
            color = 'var(--secondary)';
            break;
        default:
            color = undefined;
    }

    return (
        <div className="w-100 text-center section-title">
            <h2 style={{ color }}>{children}</h2>
            <div className="divider" style={{ backgroundColor: color }} />
        </div>
    );
};

SectionTitle.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};

SectionTitle.defaultProps = {
    variant: 'primary',
};

export default SectionTitle;
