import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);

    const auth = getAuth();
    const googleAuthProvider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleAuthProvider)
        
    }

    const logout = () =>{
      setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          })
          .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);

          });
    },[])

  return {
    user,
    googleSignIn,
    isLoading,
    setIsLoading,
    logout
  }
}

export default useFirebase;