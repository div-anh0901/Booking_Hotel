/* eslint-disable @typescript-eslint/ban-types */
import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { Service } from 'src/config/constants';
import { IUserService } from 'src/serviceProvider/users/users';
import { User } from 'src/settings/typeorms';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject(Service.USERS)
        private readonly userService: IUserService,
    ) {
        super();
    }
    serializeUser(user: User, done: Function) {
      
        done(null, user);
    }
    async deserializeUser(user: User, done: Function) {
     
        const userDb = await this.userService.findUser({ id: user.id });
        console.log(userDb)
        return userDb ? done(null, userDb) : done(null, null);
    }
}
