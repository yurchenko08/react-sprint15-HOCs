import withLoading from './withLoading';

function EntityDetails({ data, propsToDisplay }) {
  return (
    <div className='center'>
      <h3>{data.name} Details:</h3>
      {Object.entries(propsToDisplay).map((entry) => (
        <div key={entry[1]}>
          {' '}
          {entry[1]}: <strong>{data[entry[0]]}</strong>
        </div>
      ))}
    </div>
  );
}

export default withLoading(EntityDetails);
