import { useState, createContext, useContext } from 'react';

const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [SubMenu, setSubMenu] = useState(false);

    return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
        {children}
    </LoginContext.Provider>
}
export const sub = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return
}
export const useLogin = () => useContext(LoginContext)