import { Entity, Column } from "typeorm";
import { AbstractMongoEntity } from './abstract-mongo.entity';

@Entity('task')
export class Task extends AbstractMongoEntity {

    @Column()
    name: string;

    @Column()
    description: string;

}