import React from 'react';

function LimitsList(props) {
  console.log({ props });
  const {
    name, character, level, desc, obtain_by,
  } = props;
  return (
    <section className="limitsList">
      <h2>{name}</h2>
      <p>
        Character:
        {' '}
        {character}
      </p>
      <p>
        Level:
        {' '}
        {level}
      </p>
      <p>
        Description:
        {' '}
        {desc}
      </p>
      <p>
        Obtain by:
        {' '}
        {obtain_by}
      </p>
    </section>
  );
}

export default LimitsList;
