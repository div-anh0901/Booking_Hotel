import { User } from "src/settings/typeorms";

export type CreateUserDetails = {
    email: string;
    username: string;
    password: string;
};
export type FindUserOptions = Partial<{
    selectAll: boolean;
}>;


export type ValidateUserDetails = {
    email: string;
    password: string;
};

export interface AuthenticatedRequest extends Request {
    user: User;
}

export type FindUserParams = Partial<{
    id: number;
    email: string;
    username: string;
}>;