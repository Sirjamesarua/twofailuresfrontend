import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    putToken: () => { }
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("uncomment_this_code_to_open_episodes");
    // const [token, setToken] = useState(localStorage.getItem('USER_TOKEN'));

    const putToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('USER_TOKEN', token);
        } else {
            localStorage.removeItem('USER_TOKEN');
        }
    }


    return (
        <StateContext.Provider value={{
            user, token, setUser, putToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext)