import {Injectable,HttpException,HttpStatus} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDetails } from 'src/config/types';
import { User } from 'src/settings/typeorms';
import { hashPassword } from 'src/utils/helpers';
import { Repository } from 'typeorm';
import { IUserService } from './users';


@Injectable()
export class UsersService implements IUserService{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){

    }
    async createUser(userDetail: CreateUserDetails): Promise<User> {
        const  existingUser= await this.userRepository.findOne({email:userDetail.email});
        if(existingUser){
            throw  new HttpException('User already exists',HttpStatus.CONFLICT);
        }
        const password=await hashPassword(userDetail.password);
        const newUser= this.userRepository.create({...userDetail,password})
        return this.userRepository.save(newUser);
    }

    findUser(params: Partial<{ id: number; email: string; username: string; }>): Promise<User> {
        return this.userRepository.findOne(params);
    }
}