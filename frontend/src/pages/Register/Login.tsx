import s from './Auth.module.scss'

const Login = () => {

  return (
    <section className={s.auth}>
      <div className={s.container}>
        <div className={s.authContent}>
          <div className={s.authForm}>
            <h2 className={s.authTitle}>Login</h2>
            <form>
              <input
                type="email"
                className={s.authInput}
                placeholder="Email"
                autoComplete="new-email"
              />
              <input
                type="password"
                className={s.authInput}
                placeholder="Password"
                autoComplete="new-password"
              />
              <div className={s.authBtns}>
                <button type="submit" className={s.authSubLinkBtn} >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Login;