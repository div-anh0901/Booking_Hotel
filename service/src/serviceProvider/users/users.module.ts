import  {Module} from  '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from 'src/config/constants';
import { User } from 'src/settings/typeorms';
import { UsersService } from './users.service';


@Module({
    imports:[TypeOrmModule.forFeature([User])],
    controllers:[],
    providers:[{
        provide:Service.USERS,
        useClass:UsersService
    }],
    exports:[{
        provide:Service.USERS,
        useClass: UsersService
    }]
})

export class UsersModule{}