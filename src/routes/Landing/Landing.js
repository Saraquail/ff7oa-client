import React from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';
// import summoning from '../../images/Summoning_Materia.png';
// import command from '../../images/Command_Materia.png';
// import magic from '../../images/Magic_Materia.png';
// import complete from '../../images/Complete_Materia.png';
// import support from '../../images/Support_Materia.png';

function Landing() {
  return (
    <section className="landing-page">
      {/* <img src={magic}
      alt="green orb of magic materia from final fantasy 7" className="materia-img" />
      <img src={complete}
        alt="purple orb of complete materia from final fantasy 7"
        className="materia-img" />
      <img src={command}
        alt="yellow orb of command materia from final fantasy 7"
        className="materia-img" />
      <img src={support}
        alt="blue orb of support materia from final fantasy 7"
        className="materia-img" />
      <img src={summoning}
        alt="red orb of summoning materia from final fantasy 7"
        className="materia-img" /> */}

      <h1 id="welcome">Welcome to the unofficial FFVII Companion App!</h1>
      {/* instructions for how to use the app
      <p className="onboarding">
      This is a bestiary which lists monsters with their stats and information.
      </p>

       */}

      <Link to="/weapons">
        <article className="select-page-btn">
          <p>Weapons</p>
        </article>
      </Link>
      <article className="select-page-btn">
        <Link to="/bestiary">
          <p>Bestiary</p>
        </Link>
      </article>
      <Link to="/limits">
        <article className="select-page-btn">
          <p>Limit Breaks</p>
        </article>
      </Link>
      <Link to="/materia">
        <article className="select-page-btn">
          <p>Materia</p>
        </article>
      </Link>
    </section>
  );
}

export default Landing;