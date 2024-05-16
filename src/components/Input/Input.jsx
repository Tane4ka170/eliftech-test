import { InputField } from './Input.styled';

const Input = ({ onChange }) => {
  return (
    <>
      <InputField
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Filter..."
      />
    </>
  );
};

export default Input;
