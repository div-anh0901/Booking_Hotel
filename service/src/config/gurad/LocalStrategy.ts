import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IAuthClientService } from 'src/serviceProvider/auth/client/authClient';
import { Service } from '../constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(Service.AUTH_CLIENT) private readonly authService: IAuthClientService,
    ) {
        super();
    }

    async validate(email: string, password: string) {
        return this.authService.validateUser({ email, password });
    }
}
