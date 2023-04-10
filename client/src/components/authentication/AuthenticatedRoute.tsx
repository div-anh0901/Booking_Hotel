import React,{FC, useContext} from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../utils/hook/useAuth";
import { AuthContext } from "../../utils/context/AuthContext";

export const AuthenticatedRoute: FC<React.PropsWithChildren> = ({ children }) => {
    const localtion = useLocation();
    const { user, loading } = useAuth();    
    if (loading) {
        return <>loading</>
    } else {
        if (user) {
            return <>{children}</>;
        } else {
            return <Navigate to="/login" state={{ from: localtion }} replace />
        }
    }
}