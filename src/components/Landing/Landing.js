import React, { Component } from 'react'
import LoginorRegister from '../LoginForm/LoginorRegister'
import './Landing.css'

class Landing extends Component {

  render () {
    return(
      <section className="landing-page">
        <h1>Welcome to the unofficial FFVII Companion App!</h1>
        <p className="onboarding">This is a bestiary which lists monsters with their stats and information.</p>

        <p className="onboarding">If you sign in as a test user, you can test out the add monsters and PHS features, but they will be cleared periodically.</p>

        <p className="onboarding">If you choose to continue as a guest, you may browse and search/sort the bestiary, but you may not add monsters or use the PHS feature.</p>

        <p className="onboarding">If you login or register for an account, you can add new monsters as well as bookmark monsters to your own personal list for quick reference. You can find this by going to My PHS. When you add a monster, the field "Added by" will be added to your monster with your username.</p>

        <h5>Please fill out this survey! <a href="https://forms.gle/CSgMdqyqkMYMb4wv6" rel="noopener noreferrer" target="_blank">Click Here</a></h5>
        <LoginorRegister />
      </section>
    )
  }
}

export default Landing