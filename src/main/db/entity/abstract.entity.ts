import { PrimaryGeneratedColumn, Column } from "typeorm";

export abstract class AbstractEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    creationDate: Date;

    @Column()
    updateDate: Date;

}