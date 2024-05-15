const Input = ({ onChange }) => {
  return (
    <>
      <input
        type="text"
        name="filter"
        onChange={onChange}
        placeholder="Filter..."
      />
    </>
  );
};

export default Input;
