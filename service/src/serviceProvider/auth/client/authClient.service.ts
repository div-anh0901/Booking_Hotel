import { HttpException, HttpStatus, Inject } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Service } from "src/config/constants";
import { CreateUserDetails, FindUserParams, ValidateUserDetails } from "src/config/types";
import { User } from "src/settings/typeorms";
import { compareHash, hashPassword } from "src/utils/helpers";
import { Repository } from "typeorm";
import { IAuthClientService } from "./authClient";


export class AuthClientService implements IAuthClientService {
    constructor( @InjectRepository(User) private readonly authSerivce: Repository<User>,){

    }

    async validateUser(userDetails: ValidateUserDetails): Promise<User> {
        const user = await this.findUser({email:userDetails.email});
        if (!user)
            throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
        const isPasswordValid = compareHash(userDetails.password, user.password);
        return isPasswordValid ? user : null;

    }

    async createUser(userDetails: CreateUserDetails) {
        const existingUser = await this.authSerivce.findOne({
           where: {email: userDetails.email}
        });
        if (existingUser)
            throw new HttpException('User already exists', HttpStatus.CONFLICT);
        const password = await hashPassword(userDetails.password);
        const newUser = this.authSerivce.create({ ...userDetails, password });
        return this.authSerivce.save(newUser);
    }


     async   findUser(user: Partial<{ id: number; email: string; username: string; }>): Promise<User> {
        const selections: (keyof User)[] = ['email', "username",  'id'];
        const selectionsWithPassword: (keyof User)[] = [...selections, 'password'];
        return this.authSerivce.findOne({where: user});
    }
}