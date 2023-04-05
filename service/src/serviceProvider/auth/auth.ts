import { ValidateUserDetails } from "src/config/types";
import { User } from "src/settings/typeorms";

export interface  IAuthService{
    validateUser(user:ValidateUserDetails): Promise<User| null>;
    
}