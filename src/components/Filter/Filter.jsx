import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label } from 'components/Filter/Filter.styled';

export const Filter = ({ filter, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="name" value={filter} onChange={onChange}></Input>
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
