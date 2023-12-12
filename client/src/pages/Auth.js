import React from "react";
import { NavLink, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {

    const location = useLocation();

    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <div className="auth">
            <div className="auth__wrapper">
                <h2 className="auth__title">{ isLogin ? 'Authorize' : 'Registration'}</h2>
                <form className="auth__form">
                    { isLogin ?
                        <p className="auth__text">
                            Don't have an account?
                            <NavLink className="auth__link" to={REGISTRATION_ROUTE}>Sign Up</NavLink>
                        </p>
                        :
                        <p className="auth__text">
                            Already have an account?
                            <NavLink className="auth__link" to={LOGIN_ROUTE}>Sign In</NavLink>
                        </p>
                    }
                    <input className="auth__input" type="text" placeholder="email"></input>
                    <input className="auth__input" type="text" placeholder="password"></input>
                    <button className="auth__button">{ isLogin ? 'Sign In' : 'Sign Up'}</button>
                </form>
            </div>
        </div>
    );
}

export default Auth;