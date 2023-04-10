import {Controller,Inject,Post,Body, UseGuards, Res, Req,HttpStatus, Get}from '@nestjs/common'
import { instanceToPlain } from 'class-transformer';
import { Routes, Service } from 'src/config/constants';
import { Request, Response } from 'express';
import { IUserService } from '../users/users';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/createUser.dto';
import { AuthenticatedGuard, LocalAuthGuard } from './utils/Guards';
import { Roles } from './utils/Roles';
import { Role } from './dtos/role.num';
import { RolesGuard } from './utils/Roles.Guards';


@Controller(Routes.AUTH)
export  class AuthController{
    constructor(
        @Inject(Service.AUTH) private  readonly authService:IAuthService,
        @Inject(Service.USERS) private  readonly userService:IUserService,
    ){}

    @Post('register')
    async registerUser(@Body() createUserDto: CreateUserDto) {
        return instanceToPlain(await this.userService.createUser(createUserDto))
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Res() res: Response){
        return res.send(HttpStatus.OK);
    }

    @Get('status')
    // @Roles(Role.ADMIN)
    // @UseGuards(AuthenticatedGuard,RolesGuard)
    @UseGuards(AuthenticatedGuard)
    status(@Req() req: Request, @Res() res: Response) {
        res.send(req.user);
    }

}