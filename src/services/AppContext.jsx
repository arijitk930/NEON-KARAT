import React,{ useContext } from "react";

const UserContext = React.createContext({
    user:null,
    authStatus:false,
    login:()=>{},
    logout:()=>{}
})

export const useAuth=()=>{
    return useContext(UserContext)
}

export const UserContextProvider = UserContext.Provider