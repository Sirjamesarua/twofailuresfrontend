import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    // for user
    user: null,
    putUser: () => { },

    // for admin
    admin: null,
    adminToken: null,
    setAdmin: () => { },
    putAdminToken: () => { },

    // redirect after login
    redirect: "/episodes/1",
    setRedirect: () => { }
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('tfuser'));
    const [admin, setAdmin] = useState("");
    const [adminToken, setAdminToken] = useState(localStorage.getItem('tfa_token'));
    const [redirect, setRedirect] = useState("");

    const putUser = (user) => {
        if (user) {
            setUser(user);
            localStorage.setItem('tfuser', true);
        } else {
            localStorage.removeItem('tfuser');
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
            user, putUser, //user
            admin, adminToken, setAdmin, putAdminToken, //admin
            redirect, setRedirect //redirect after login
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)