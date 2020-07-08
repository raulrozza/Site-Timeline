import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProjectItem = ({ title, content, image }) => {
    return (
        <div className="project-item">
            <picture>
                <img src={image} alt={content} />
            </picture>
            <div>
                <h5>{title}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
};

ProjectItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
};

ProjectItem.defaultProps = {
    title: '',
    content: '',
    image: '',
};

export default ProjectItem;
