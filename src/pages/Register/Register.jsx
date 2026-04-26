
import React from 'react';
import * as LottieModule from "lottie-react";
import registerAnimation from '../../assets/register.json';

const Lottie =
    (typeof LottieModule.default === "function" && LottieModule.default) ||
    (typeof LottieModule.default?.default === "function" && LottieModule.default.default) ||
    (typeof LottieModule.Lottie === "function" && LottieModule.Lottie) ||
    (typeof LottieModule === "function" && LottieModule);

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-3 w-96">
                    
                    {Lottie ? (
                        <Lottie
                            animationData={registerAnimation}
                            loop
                            autoplay
                            className="w-[280px] h-[280px] md:w-[360px] md:h-[360px]"
                        />
                    ) : (
                        <p className="text-sm text-red-500">Animation failed to load.</p>
                    )}
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <h1 className="text-4xl font-bold">Register now!</h1>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;