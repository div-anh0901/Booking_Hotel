import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name : 'hotels'})
export class Hotel{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    des: string;

    @Column()
    content: string;

    @Column()
    photos: string;


    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}