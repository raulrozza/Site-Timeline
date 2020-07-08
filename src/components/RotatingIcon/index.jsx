import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const RotatingIcon = ({ Icon, size, title }) => {
    return (
        <div
            title={title}
            className="rotating-icon-box"
            style={{ width: size.width, height: size.height }}
        >
            <Icon />
        </div>
    );
};

RotatingIcon.propTypes = {
    Icon: PropTypes.node,
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    title: PropTypes.string,
};

RotatingIcon.defaultProps = {
    Icon: <></>,
    size: {
        width: '45px',
        height: '45px',
    },
};

export default RotatingIcon;
