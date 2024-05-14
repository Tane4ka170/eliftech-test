import { Discuss } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#fff"
        backgroundColor="#528193"
      />
    </div>
  );
};
