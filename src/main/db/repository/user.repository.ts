import { User } from '../entity/user.entity';
import {EntityRepository, EntityManager} from "typeorm";
import { AbstractRepository } from './abstract.repository'
import { UserModel } from '../../bs/model/user.model';

@EntityRepository()
export class UserRepository implements AbstractRepository<UserModel,User> {
    
    private _baseLogError: string = 'User Repository Error: ';
    private _nullInputError: string = 'Input model cannot be null';

    constructor(private _em: EntityManager) {
    }

    public async createAndSave(model: UserModel): Promise<User> {

        if(!model){
            return Promise.reject(new Error(this._baseLogError + this._nullInputError));
        }

        const user: User = new User();
        user.email = model.email;
        user.password = model.password;
        user.name = model.name;
        user.surname = model.surname;
        user.username = model.username;
        user.creationDate = new Date();
        user.updateDate = new Date();

        return await this._em.save(user).then((user: User) => {
            return user;
        }).catch(error => {
            throw new Error(this._baseLogError + error.message);
        });
    }
    
    public async updateAndSave(model: UserModel): Promise<User> {

        if(!model){
            return Promise.reject(new Error(this._baseLogError + this._nullInputError));
        }

        const dbuser: User = await this._em.findOne(User, {
            where: {
                id: model.id
            }
        });

        dbuser.email = model.email;
        dbuser.password = model.password;
        dbuser.name = model.name;
        dbuser.surname = model.surname;
        dbuser.username = model.username;
        dbuser.updateDate = new Date();

        return await this._em.save(dbuser).then((user: User) => {
            return user;
        }).catch(error => {
            throw new Error(this._baseLogError + error.message);
        });
    }
    
    public async readById(id: number): Promise<User> {
        
        if(!id){
            return Promise.reject(new Error(this._baseLogError + this._nullInputError));
        }

        const dbuser: User = await this._em.findOne(User, {
            where: {
                id: id
            }
        });

        return await this._em.save(dbuser).then((user: User) => {
            return user;
        }).catch(error => {
            throw new Error(this._baseLogError + error.message);
        });
    }
    
    public async deleteById(id: number): Promise<boolean> {
        
        if(!id){
            return Promise.reject(new Error(this._baseLogError + this._nullInputError));
        }

        const dbuser: User = await this._em.findOne(User, {
            where: {
                id: id
            }
        });
    
        return await this._em.remove(dbuser).then((user: User) => {
            return true;
        }).catch(error => {
            throw new Error(this._baseLogError + error.message);
        });
    }   

}