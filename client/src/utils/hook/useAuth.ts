import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { User } from "../type";
import { AuthContext } from "../context/AuthContext";
import { getAuthUser } from "../../config/apiConfig";


export function useAuth(){
    const location = useLocation();
    const [user,setUser] = useState<User|undefined>();
    const [loading,setLoading] = useState(false);
    const controller = new AbortController();
    const {updateAuthUser} = useContext(AuthContext);
    useMemo(()=>{
        setLoading(true)
        getAuthUser().then(({data})=>{
            setUser(data);
            updateAuthUser(data);
            setLoading(false);
        }).catch((err)=>{
            setLoading(false);
        });
        return ()=>{
            controller.abort()
        }
    },[]);



    return {user,loading}
}