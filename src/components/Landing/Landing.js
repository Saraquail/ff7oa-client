import React, { Component } from 'react'
import LoginorRegister from '../LoginForm/LoginorRegister'
import './Landing.css'

class Landing extends Component {

  render () {
    return(
      <section className="landing-page">
        <h1>Welcome to the unofficial FFVII Companion App!</h1>
        <p className="onboarding">This is a bestiary which lists monsters with their stats and information.</p>

        <p className="onboarding">If you sign in as a guest, you can test out the add monsters and PHS features, but they will be cleared periodically.</p>
        <p className="onboarding">If you register for an account, you can bookmark monsters to your own personal list for quick reference. You can find this by going to My PHS. When you add a monster a field "Added by" will be added to your monster with your username.</p>

        <h5>Please fill out this survey! <a href="https://forms.gle/CSgMdqyqkMYMb4wv6" rel="noopener noreferrer" target="_blank">Click Here</a></h5>
        <LoginorRegister />
      </section>
    )
  }
}

export default Landing