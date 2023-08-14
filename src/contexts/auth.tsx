import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);


export const AuthProvider = (children) => {
    const [isAuth, setIsAuth] = useState();


    return <AuthContext.Provider value={{isAuth,setIsAuth}}>
        {children}
    </AuthContext.Provider>
}


export const useAuth = ()=>useContext(AuthContext)
