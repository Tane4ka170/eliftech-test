import Select from 'react-select';

const Filter = ({ onChange }) => {
  return (
    <div>
      <Select
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
    </div>
  );
};

export default Filter;
