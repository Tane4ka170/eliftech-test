import { CustomSelect, FilterContainer } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <FilterContainer>
      <CustomSelect
        options={[
          { value: 'name', label: 'Name' },
          { value: 'date', label: 'Date' },
          { value: 'organizer', label: 'Organizer' },
        ]}
        onChange={onChange}
        placeholder="Sort by..."
        className="basic-single"
        classNamePrefix="select"
      />
    </FilterContainer>
  );
};

export default Filter;
