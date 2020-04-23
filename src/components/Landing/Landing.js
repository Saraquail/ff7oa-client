import React, { Component } from 'react'
import LoginorRegister from '../LoginForm/LoginorRegister'
import './Landing.css'
import summoning from '../../images/Summoning_Materia.png'
import command from '../../images/Command_Materia.png'
import magic from '../../images/Magic_Materia.png'
import complete from '../../images/Complete_Materia.png'
import support from '../../images/Support_Materia.png'

class Landing extends Component {

  render () {
    return(
      <section className="landing-page">
      <img src={magic} alt="green orb of magic materia from final fantasy 7" className="materia-img" />
      <img src={complete} alt="purple orb of complete materia from final fantasy 7" className="materia-img" />
      <img src={command} alt="yellow orb of command materia from final fantasy 7" className="materia-img" />
      <img src={support} alt="blue orb of support materia from final fantasy 7" className="materia-img" />
      <img src={summoning} alt="red orb of summoning materia from final fantasy 7" className="materia-img" />

        <h1 id="welcome">Welcome to the unofficial FFVII Companion App!</h1>
        <p className="onboarding">This is a bestiary which lists monsters with their stats and information.</p>

        <p className="onboarding">If you sign in as a test user, you can test out the add monsters and PHS features, but they will be cleared periodically.</p>

        <p className="onboarding">If you choose to continue as a guest, you may browse and search/sort the bestiary, but you may not add monsters or use the PHS feature.</p>

        <p className="onboarding">If you login or register for an account, you can add new monsters as well as bookmark monsters to your own personal list for quick reference. You can find this by going to My PHS. When you add a monster, the field "Added by" will be added to your monster with your username.</p>

        <LoginorRegister />
      </section>
    )
  }
}

export default Landing