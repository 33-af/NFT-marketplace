import s from './Auth.module.scss'

const Register = () => {


    return (
        <section className={s.auth}>
            <div className={s.container}>
                <div className={s.authContent}>
                    <div className={s.authForm}>
                        <h2 className={s.authTitle}>
                            Register
                        </h2>
                        <form autoComplete="off">
                            <input
                                type="text"
                                className={s.authInput}
                                placeholder="Username"
                  
                                autoComplete="off"
                            />
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
                                <button type="submit" className={s.authSubLinkBtn}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register
