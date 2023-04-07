import { Role } from "src/serviceProvider/auth/dtos/role.num";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;


    @Column()
    email: string;

    @Column({default: Role.USER})
    role: string;

    @Column()
    password: string;
}