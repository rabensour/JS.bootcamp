import React from 'react'
import PropTypes from 'prop-types';

const Alert= (props) => {
    const {role} = props;

    return (
    <div class="alert alert-danger" role="alert">
        OMG! Something really bad has happended!
        </div>
    )
}

Alert.propTypes = {
    role: PropTypes.string
};

export default Alert