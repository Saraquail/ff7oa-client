import React, { Component } from 'react'
import LoginorRegister from '../LoginForm/LoginorRegister'

class Landing extends Component {

  render () {
    return(
      <section className="landing-page">
        <h1>Welcome to the unofficial FFVII Companion App!</h1>
        <p>Herein you can find a detailed bestiary listing monsters from the game as well as their stats and other information.</p>
        <p>As a guest, you can view all items and sort/search/filter the list as you please. If you want more information on a monster, simply click the appropriate button it will expand, giving you more information.</p>
        <p>If you sign in as a guest, you can test out the add monsters and PHS features, but they will be cleared periodically.</p>
        <p>If you register for an account, you can bookmark monsters to your own personal list for quick reference. You can find this by going to My PHS. When you add a monster a field "Added by" will be added to your monster with your username.</p>
        <p>If you'd like to sign in as a guest, simply hit Login, and then Let's Mosey without changing the text in the fields.</p>
        <p>If you'd like to register for an account, simply hit Register, and input your desired username and password, and then hit Let's Mosey.</p>
        <LoginorRegister />
      </section>
    )
  }
}

export default Landing