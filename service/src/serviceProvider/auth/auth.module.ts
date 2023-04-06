import {Module} from "@nestjs/common";
import { Service } from "src/config/constants";
import { UsersModule } from "../users/users.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./utils/LocalStrategy";
import { SessionSerializer } from "./utils/SessionSerializer";
import { RolesGuard } from "./utils/Roles.Guards";



@Module({
    imports:[UsersModule],
    controllers:[AuthController],
    providers:[
        LocalStrategy,
        SessionSerializer,
        RolesGuard,
        {
        provide: Service.AUTH,
        useClass: AuthService
    }],
    exports:[]
})

export class AuthModule{}
