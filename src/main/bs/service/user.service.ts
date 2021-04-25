import { User } from "../../db/entity/user.entity";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../../db/repository/user.repository";
import { UserModel } from "../model/user.model";

/**
 * Implements the application crud for the user called by the exposed api.
 * 
 * @class
 */

const _userRepo: UserRepository = getCustomRepository(UserRepository);

export async function createUser(model: UserModel): Promise<void | UserModel> {
    try {
        return await _userRepo.createAndSave(model).then((user: User) => {
            
            return new UserModel(user.id,
                user.username,
                user.password,
                user.name,
                user.surname,
                user.email);

        }).catch((error: any) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error);
    }
}

export async function updateUserPassword(model: UserModel): Promise<void | UserModel> {
    try {
        return await _userRepo.updateAndSave(model).then((user: User) => {
            
            return new UserModel(user.id,
                user.username,
                user.password,
                user.name,
                user.surname,
                user.email);

        }).catch((error: any) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error);
    }
}

export async function getUser(id: number): Promise<void | UserModel> {
    try {
        return await _userRepo.readById(id).then((user: User) => {
            
            return new UserModel(user.id,
                user.username,
                user.password,
                user.name,
                user.surname,
                user.email);

        }).catch((error: any) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error);
    }
}

export async function deleteUser(id: number): Promise<void | boolean> {
    try {
        return await _userRepo.deleteById(id).then((isDeleted: boolean) => {
        
            return isDeleted;
        }).catch((error: any) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error);
    }
}
