import s from './Auth.module.scss'
import { SubmitHandler, useForm } from "react-hook-form"
import { IFormRegister } from '../../types/Form'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/authContenxt'

const Register = () => {
    const { register, handleSubmit, reset } = useForm<IFormRegister>();
    const navigate = useNavigate();
    const { handleRegister } = useAuth();

    const onSubmit: SubmitHandler<IFormRegister> = async (data) => {
        try {
            console.log("Sending data", data);

            const responseRegister = await handleRegister(data); 
            console.log("Response from the server:", responseRegister);
            reset();
        } catch (error) {
            console.error("Error when submitting a form:", error);
        }
    };

    const handleNavigate = () => {
        navigate("/login")
    }

    return (
        <section className={s.auth}>
            <div className={s.container}>
                <div className={s.authContent}>
                    <div className={s.authForm}>
                        <h2 className={s.authTitle}>
                            Register
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <input
                                type="text"
                                className={s.authInput}
                                placeholder="Username"
                                {...register("username", { required: true })}
                                autoComplete="off"
                            />
                            <input
                                type="email"
                                className={s.authInput}
                                placeholder="Email"
                                {...register("email", { required: true })}
                                autoComplete="new-email"
                            />
                            <input
                                type="password"
                                className={s.authInput}
                                placeholder="Password"
                                {...register("password", { required: true })}
                                autoComplete="new-password"
                            />
                            <div className={s.authBtns}>
                                <button type="submit" className={s.authSubLinkBtn} onClick={handleNavigate}>
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
