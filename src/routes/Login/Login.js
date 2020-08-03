import React from 'react';
import LoginorRegister from '../../components/LoginForm/LoginorRegister';

function Login() {
  return (
    <section className="login-page">
      <p className="onboarding">
        If you login or register for an account, you can add new monsters as
        well as bookmark monsters to your own personal list for quick reference.
        You can find this by going to My PHS.
      </p>

      <p className="onboarding">
        If you choose to continue as a guest, you may browse and search/sort the
        bestiary, but you may not add monsters or use the PHS feature.
      </p>
      <LoginorRegister />
    </section>
  );
}

export default Login;
