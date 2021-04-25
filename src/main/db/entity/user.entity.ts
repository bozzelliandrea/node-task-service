import { Entity, Column } from "typeorm";
import { AbstractEntity } from './abstract.entity';

@Entity('user')
export class User extends AbstractEntity {

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    email: string;

}