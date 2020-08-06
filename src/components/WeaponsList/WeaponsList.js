import React from 'react';

function WeaponsList(props) {
  console.log({ props });
  const {
    name, slots, location, growth, character,
  } = props;
  return (
    <section className="weaponsList">
      <h2>{name}</h2>
      <p>
        Character:
        {' '}
        {character}
      </p>
      <p>
        Slots:
        {' '}
        {slots}
      </p>
      <p>
        Growth:
        {' '}
        {growth}
      </p>
      <p>
        Location:
        {' '}
        {location}
      </p>
    </section>
  );
}

export default WeaponsList;
