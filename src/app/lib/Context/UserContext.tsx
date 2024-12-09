"use client"
import React, { ReactNode, useContext } from "react";
interface User{
    name: string;
    username: string;
    image: string;
}
interface UserProps{
   user: User | null;
   setUser: (user: User) => void;
}
export const UserContext = React.createContext({} as UserProps);

export function UserProvider({children}: {children: ReactNode}) {
    const [user, setUser] = React.useState<User | null>(null)
    return (
        <UserContext.Provider value={{setUser, user}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser  = () => useContext(UserContext)