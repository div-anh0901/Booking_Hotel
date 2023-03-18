import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/config/constants';
import { LocalStrategy } from 'src/config/gurad/LocalStrategy';
import { SessionSerializer } from 'src/config/gurad/SessionSerializer';
import { User } from 'src/settings/typeorms';
import { AuthClientController } from './authClient.controller';
import { AuthClientService } from './authClient.service';


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[AuthClientController],
    providers:[
        LocalStrategy,
        SessionSerializer,
        {
            provide: Service.AUTH_CLIENT,
            useClass: AuthClientService,
        },
    ]
})
export  default class AuthClientModule{}


