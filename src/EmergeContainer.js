import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Emergence from 'emergence.js';
import cx from 'classnames';

export default class EmergeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            containerRef: void 0
        };

        if (props.useWindowAsContainer) {
            Emergence.init(props.args);
        }

        this.setContainerRef = this.setContainerRef.bind(this);
    }

    setContainerRef(el) {
        if (el && !this.state.containerRef) {
            const { args } = this.props;

            this.setState({ containerRef: el });

            Emergence.init({ ...args, container: el });
        }
    }

    render() {
        const { useWindowAsContainer, children, className } = this.props;

        if (useWindowAsContainer) { return children; }

        return (
            <div className={cx('emerge-container', className)} ref={this.setContainerRef}>
                {children}
            </div>
        );
    }
}

EmergeContainer.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    useWindowAsContainer: PropTypes.bool,
    args: PropTypes.shape({
        reset: PropTypes.bool,
        handheld: PropTypes.bool,
        throttle: PropTypes.number,
        elemCushion: PropTypes.number,
        offsetTop: PropTypes.number,
        offsetRight: PropTypes.number,
        offsetBottom: PropTypes.number,
        offsetLeft: PropTypes.number,
        callback: PropTypes.func
    })
};

EmergeContainer.defaultProps = {
    args: {},
    useWindowAsContainer: false,
    className: void 0
};
