import PropTypes from 'prop-types';
import React from 'react';

export default function Input(props) {
  const { type, testid, name, value, placeholder, label } = props;
  return (
    <div>
      <label htmlFor={ name }>
        { label }
        <input
          type={ type }
          data-testid={ testid }
          id={ name }
          name={ name }
          placeholder={ placeholder }
          value={ value }
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
