import *  as  bcrypt from 'bcrypt';
import { Response, Request, NextFunction } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';
import { AuthenticatedRequest } from 'src/config/types';
export async function hashPassword(rawPassword: string) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawPassword, salt);
}


export async function compareHash(rawPassword: string, hashedPassword: string) {
    return bcrypt.compare(rawPassword, hashedPassword);
}


export function isAuthorized(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user) next();
    else throw new HttpException('Forbiddin', HttpStatus.BAD_REQUEST);

}