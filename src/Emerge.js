import React from 'react';
import PropTypes from 'prop-types';

export default function Emerge({ children }) {
    const childrenEl = React.Children.only(children);

    return React.cloneElement(childrenEl, { 'data-emergence': 'hidden' });
}

Emerge.propTypes = {
    children: PropTypes.node.isRequired
};
