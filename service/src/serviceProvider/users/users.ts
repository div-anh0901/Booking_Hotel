import { CreateUserDetails, FindUserParams } from "src/config/types";
import { User } from "src/settings/typeorms";


export interface IUserService{
    createUser(userDetail: CreateUserDetails) : Promise<User>;
    findUser(params:FindUserParams): Promise<User>;
}