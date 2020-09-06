import React from 'react'
import PropTypes from 'prop-types';

const colorClasses = {
    'red': 'alert-danger',
    'orange': 'alert-warning'
}

const Alert3 = (props) => {
    const {text, color} = props;

return (
<div class={`alert ${colorClasses[props.color]}`} role="alert">
{text}
</div>
)
}

Alert3.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
};

export default Alert3;
