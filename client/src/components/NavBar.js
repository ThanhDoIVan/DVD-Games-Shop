import React, { useContext } from "react";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {observer} from "mobx-react-lite";


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();
    return (
        <div className="navbar">
            <div className="navbar__wrapper">
                <h1 className="navbar__title">
                    <NavLink to={SHOP_ROUTE}>Name</NavLink>
                </h1>
                { user.isAuth ?
                    <div className="navbar__buttons">
                        <button className="navbar__button" onClick={
                            () => history.push(ADMIN_ROUTE)
                        }>Admin</button>
                        <button className="navbar__button" onClick={
                            () => history.push(LOGIN_ROUTE)
                        }>Sign Out</button>
                    </div>
                    :
                    <div className="navbar__buttons">
                        <button className="navbar__button" onClick={ () => user.setIsAuth(true) }>Authorize</button>
                    </div>
                }
            </div>
        </div>
    );
});

export default NavBar;