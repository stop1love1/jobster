import { createContext, useState } from 'react';
import config from '@/config';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem(config.localStorage.user)));
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
