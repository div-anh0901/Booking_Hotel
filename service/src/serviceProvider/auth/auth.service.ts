import {Injectable,Inject,HttpException,HttpStatus} from '@nestjs/common'
import { Service } from 'src/config/constants';
import { ValidateUserDetails } from 'src/config/types';
import { User } from 'src/settings/typeorms';
import { compareHash } from 'src/utils/helpers';
import { IUserService } from '../users/users';
import { UsersService } from '../users/users.service';
import { IAuthService } from './auth';

@Injectable()
export class AuthService implements IAuthService{
    constructor(@Inject(Service.USERS) private readonly usersService:IUserService){

    }
    async validateUser(user: ValidateUserDetails): Promise<User> {
        const userfind = await this.usersService.findUser({email:user.email});
        if(!userfind){
            throw new HttpException('Invalid Credentials',HttpStatus.UNAUTHORIZED);
        }
        const  isPasswordValid= compareHash(user.password,userfind.password);
        return isPasswordValid ?userfind:null
    }
}