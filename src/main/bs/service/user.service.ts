import { User } from "../../db/entity/user.entity";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../db/repository/user.repository";
import { UserModel } from "../model/user.model";
import { validateId } from "../../core/decorator/validate-id.decorator"
import { required } from "../../core/decorator/required.decorator"
/**
 * Implements the application crud for the user called by the exposed api.
 * 
 * @class
 */
export class UserService {

    private _userRepo: UserRepository;

    constructor(){
        this._userRepo = getCustomRepository(UserRepository);
    }

    public async createUser(model: UserModel): Promise<void | UserModel> {
        try {
            return await this._userRepo.createAndSave(model).then((user: User) => {

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

    public async updateUserPassword(model: UserModel): Promise<void | UserModel> {
        try {
            return await this._userRepo.updateAndSave(model).then((user: User) => {

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

    @validateId
    public async getUser(@required id: number): Promise<void | UserModel> {
        try {
            return await this._userRepo.readById(id).then((user: User) => {

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

    @validateId
    public async deleteUser(@required id: number): Promise<void | boolean> {
        try {
            return await this._userRepo.deleteById(id).then((isDeleted: boolean) => {

                return isDeleted;
            }).catch((error: any) => {
                console.error(error);
            });
        } catch (error) {
            console.error(error);
        }
    }
}