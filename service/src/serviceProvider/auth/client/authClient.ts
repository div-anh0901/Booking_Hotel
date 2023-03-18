import { CreateUserDetails, FindUserParams, ValidateUserDetails } from "src/config/types";
import { User } from "src/settings/typeorms";


export interface IAuthClientService{
    validateUser(userCredentials: ValidateUserDetails): Promise<User | null>;
    createUser(userDetails: CreateUserDetails): Promise<User>;
    findUser(user: FindUserParams): Promise<User>;
}