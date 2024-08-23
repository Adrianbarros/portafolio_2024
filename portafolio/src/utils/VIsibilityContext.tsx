import React, { createContext, useState, ReactNode } from 'react';
import { VisibilityContextType } from '../types';


export const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

interface VisibilityProviderProps {
    children: ReactNode;
}

export const VisibilityProvider: React.FC<VisibilityProviderProps> = ({ children }) => {
    const [isExperienceVisible, setIsExperienceVisible] = useState<boolean>(false);

    return (
        <VisibilityContext.Provider value={{ isExperienceVisible, setIsExperienceVisible }}>
            {children}
        </VisibilityContext.Provider>
    );
};