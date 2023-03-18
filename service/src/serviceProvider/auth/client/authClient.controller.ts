import { Body, Controller, HttpStatus, Inject, Post, Res,UseGuards,Req,Get } from "@nestjs/common";
import { Routes, Service } from "src/config/constants";
import { IAuthClientService } from "./authClient";
import { CreateUserDto } from "./authClient.dto";
import { Request, Response } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from "src/config/gurad/Guards";

@Controller(Routes.AUTH_CLIENT)
export class AuthClientController{
    constructor(@Inject(Service.AUTH_CLIENT) private  authClientService:IAuthClientService){

    }

    @Post('register')
    async registerUser(@Body() createUser: CreateUserDto){
        return await this.authClientService.createUser(createUser)
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Res() res: Response) {
        return res.send(HttpStatus.OK);
    }
    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status(@Req() req: Request, @Res() res: Response) {
        res.send(req);
    }

}
