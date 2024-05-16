import Select from 'react-select';
import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 200px;
`;

export const CustomSelect = styled(Select)`
  .select__control {
    border-radius: 5px;
    border-color: #ccc;
    transition: border-color 0.3s ease;
  }

  .select__control:hover {
    border-color: #3c5bb0;
  }

  .select__control--is-focused {
    border-color: #3c5bb0;
    box-shadow: none;
  }

  .select__menu {
    border-radius: 5px;
    border-color: #ccc;
  }

  .select__option--is-selected {
    background-color: #add8e8;
  }

  .select__option--is-focused {
    background-color: #f0f8ff;
  }
`;
