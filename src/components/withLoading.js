import { useState } from 'react';
import { useEffect } from 'react';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      props.fetchMetod(props.params).then((res) => setData(res));
    }, [props]);

    return data ? (
      <WrappedComponent {...props} data={data} />
    ) : (
      <p className='center'>Loading...</p>
    );
  };
};
export default withLoading;
