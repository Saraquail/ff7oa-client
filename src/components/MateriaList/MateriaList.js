import React from 'react';

function MateriaList(props) {
  const {
    name, type, desc, location, ap, mp, skills, sell, id,
  } = props;
  return (
    <section className="materiaList">
      <div>
        <h2 className="materia-title">{name}</h2>
        <p>
          Description:
          {' '}
          {desc}
        </p>
        <p>
          Location:
          {' '}
          {location}
        </p>
        <div className="materia-ap">
          AP needed to level up:
          {ap
            ? ap.map((num, idx) => (
              <div>
                <p>
                  Level
                  {' '}
                  {idx + 1}
                  {': '}
                  {num}
                </p>
              </div>
            ))
            : 'N/A'}
        </div>
        <div className="materia-skills">
          Skills:
          {skills ? skills.map((skill) => <p>{skill}</p>) : ' N/A'}
        </div>
        <p>
          Mastered Sells For:
          {' '}
          {sell}
          {' '}
          gil
        </p>
      </div>
    </section>
  );
}

export default MateriaList;
