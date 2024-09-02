"use client";

import { userSession } from "@/interfaces";
import { useState, createContext, ReactNode, useContext, useEffect } from "react";

export interface IAuthContextProps {
    userData: userSession | null;
    setUserData: (userData: userSession | null) => void;
}

export const AuthContext = createContext<IAuthContextProps>({
    userData: null,
    setUserData: () => {},
});

export interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }: { children: ReactNode }) => {
    const [userData, setUserData] = useState<userSession | null>(null);

    useEffect(() => {
     if (userData) {
        localStorage.setItem("userSession", JSON.stringify({token: userData.token,userData:userData.userData}));
     }
    }, [userData])

    useEffect(() => {
        const userData= localStorage.getItem("userSession")
        setUserData(JSON.parse(userData!)) 
    }, [])

    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
           {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
