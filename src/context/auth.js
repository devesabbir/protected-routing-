import { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

 const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
 

  useEffect(() => {
     let data = localStorage?.getItem('auth');
     if(data) {
        let parseData = JSON.parse(data);
        setAuth((prev) => ({
             ...prev,
             user:parseData.data,
             token:parseData.token
        }))
     }
  },[])

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
        {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
