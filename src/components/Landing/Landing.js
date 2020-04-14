import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import Bestiary from '../Bestiary/Bestiary'

class Landing extends Component {


  handleSubmit = ev => {
    //let nName = e.target['note-name'].value
    
    ev.preventDefault()
    const password = ev.target['password'].value
    const user_name = ev.target['user_name'].value
    //if un/pw both = guest go to bestiary
    if (user_name === 'guest' && password === 'guest') {
      console.log(user_name, password)
    }
    //otherwise add un/pw to db and then go to bestiary
  }

  render () {
    return(
      <section className="landing-page">
        <h1>Welcome to the unofficial FFVII Companion App!</h1>
        <p>Herein you can find a detailed bestiary listing monsters from the game as well as their stats and other information.</p>
        <p>As a guest, you can view all items and sort/search/filter the list as you please. If you want more information on a monster, simply click/touch that item and it will expand, giving you more information.</p>
        <p>If you register for an account, you can do all the above as well as add new monsters and bookmark monsters to a personal list for quick reference. You can find this by going to My PHS.</p>
        <p>If you'd like to sign in as a guest, simply input the word guest into both the username and passwords fields, and hit Let's Mosey.</p>
        <p>If you'd like to register for an account, simply input your desired username and password, and hit Let's Mosey.</p>
        <LoginForm></LoginForm>
      </section>
    )
  }
}

export default Landing