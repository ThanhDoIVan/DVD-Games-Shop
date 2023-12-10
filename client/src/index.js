import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import DvdStore from './store/DvdStore';

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        dvd: new DvdStore()
    }}>
        <App />

    </Context.Provider>        
);