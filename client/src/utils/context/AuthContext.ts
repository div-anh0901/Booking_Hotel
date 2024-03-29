import { createContext } from "react";
import { User } from "../type";

type AuthContextType = {
    user?: User;
    updateAuthUser:(data: User)=> void
}
export const AuthContext = createContext<AuthContextType>({
    updateAuthUser: () => {},
});
