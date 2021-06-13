import { BaseModel } from "./base-model.interface";

export class TaskModel implements BaseModel {

    id: number;
    name: string;
    description: string;

    constructor(id: number,
            name: string,
            description?: string){
        this.id = id;
        this.name = name;
        this.description = description;
    }

}