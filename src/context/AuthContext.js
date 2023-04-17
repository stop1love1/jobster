import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAuthenticated, setIsAuthenticated] = useState(user ? true : false);

    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
