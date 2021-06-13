import { ObjectIdColumn, ObjectID } from "typeorm";

export abstract class AbstractMongoEntity {

    @ObjectIdColumn()
    id: ObjectID;

}