
export class UserModel {

    id: number;
    username: string;
    password: string;
    name: string;
    surname: string;
    email: string;

    constructor(id?: number,
            username?: string,
            password?: string,
            name?: string,
            surname?: string,
            email?: string){

        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.name = name;
        this.surname = surname;
    }
}