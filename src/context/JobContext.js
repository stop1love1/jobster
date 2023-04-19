import { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
    const [currentJob, setCurrentJob] = useState(null);
    return <JobContext.Provider value={{ currentJob, setCurrentJob }}>{children}</JobContext.Provider>;
};
