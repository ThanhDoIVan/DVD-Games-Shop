import React, { useContext, useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { registration, login } from "../http/userApi";
import {observer} from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);  
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
 
    }

    return (
        <div className="auth">
            <div className="auth__wrapper">
                <h2 className="auth__title">{ isLogin ? 'Authorize' : 'Registration'}</h2>
                <div className="auth__form">
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
                    <input className="auth__input" type="text" placeholder="email" 
                    value={email} onChange={(e) => setEmail(e.target.value)}></input>

                    <input className="auth__input" type="password" placeholder="password" 
                    value={password} onChange={(e) => setPassword(e.target.value)}></input>

                    <button className="auth__button" onClick={click}>{ isLogin ? 'Sign In' : 'Sign Up'}</button>
                </div>
            </div>
        </div>
    );
});

export default Auth;