import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    // for user
    user: null,
    putUser: () => { },

    // for ambassador
    ambassador: null,
    ambToken: null,
    putAmb: () => { },
    putAmbToken: () => { },

    // for admin
    admin: null,
    adminToken: null,
    setAdmin: () => { },
    putAdminToken: () => { },

    // redirect after login
    redirect: null || '/',
    putURL: () => { }
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('tfuser'));

    const [ambassador, setAmbassador] = useState(localStorage.getItem('tf_amb'));
    const [ambToken, setAmbToken] = useState(localStorage.getItem('tf_amb_t'));

    const [admin, setAdmin] = useState("");
    const [adminToken, setAdminToken] = useState(localStorage.getItem('tfa_token'));

    const [redirect, setRedirect] = useState(localStorage.getItem('tf_episode'));

    const putUser = (email) => {
        if (email) {
            setUser(email);
            localStorage.setItem('tfuser', email);
        } else {
            localStorage.removeItem('tfuser');
        }
    }

    const putAmb = (amb) => {
        setAmbassador(amb);
        if (amb) {
            localStorage.setItem('tf_amb', JSON.stringify(amb))
        } else {
            localStorage.removeItem('tf_amb');
        }
    }

    const putAmbToken = (token) => {
        setAmbToken(token);
        if (token) {
            localStorage.setItem('tf_amb_t', token);
        } else {
            localStorage.removeItem('tf_amb_t');
        }
    }

    const putAdminToken = (token) => {
        setAdminToken(token);
        if (token) {
            localStorage.setItem('tfa_token', token);
        } else {
            localStorage.removeItem('tfa_token');
        }
    }

    const putURL = (url) => {
        setRedirect(url);
        localStorage.setItem('tf_episode', url);
    }

    return (
        <StateContext.Provider value={{
            user, putUser, //user
            ambassador, ambToken, putAmb, putAmbToken, // Ambassador
            admin, adminToken, setAdmin, putAdminToken, // Admin
            redirect, putURL // Redirect after login
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)