import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity({name:'user_clients'})
export class UserClient{
    @PrimaryColumn()
    id: number;

    @Column()
    username:string;

    @Column()
    email: string;

    @Column()
    password:  string;

}