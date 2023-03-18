import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IAuthClientService } from "src/serviceProvider/auth/client/authClient";
import { User } from "src/settings/typeorms";
import { Service } from "../constants";


@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject(Service.AUTH_CLIENT)
        private readonly authService: IAuthClientService,
    ) {
        super();
    }
    serializeUser(user: User, done: Function) {
        done(null, user);
    }
    async deserializeUser(user: User, done: Function) {
        const userDb = await this.authService.findUser({id:user.id});
        return userDb ? done(null, userDb) : done(null, null);
    }
}
