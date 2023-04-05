import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { IAuthService } from '../auth';
import { Service } from 'src/config/constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject(Service.AUTH) private readonly authService: IAuthService,
    ) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string) {
        return await this.authService.validateUser({ email, password });
    }
}
