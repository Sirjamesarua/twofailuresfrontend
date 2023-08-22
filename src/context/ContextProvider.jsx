import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    // for user
    user: null,
    setUser: () => { },

    // for admin
    admin: null,
    adminToken: null,
    setAdmin: () => { },
    putAdminToken: () => { }
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [admin, setAdmin] = useState("");

    const [adminToken, setAdminToken] = useState(localStorage.getItem('tfa_token'));

    const putUser = (user) => {
        setUser(user);
        if (user) {
            localStorage.setItem('twofailures_pass', user);
        } else {
            localStorage.removeItem('twofailures_pass');
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

    return (
        <StateContext.Provider value={{
            user, putUser,
            admin, adminToken, setAdmin, putAdminToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)