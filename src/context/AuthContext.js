import { createContext, useState } from 'react';
import config from '@/config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = JSON.parse(localStorage.getItem(config.localStorage.user));
    const [isAuthenticated, setIsAuthenticated] = useState(user ? true : false);
    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AuthContext.Provider>;
};
