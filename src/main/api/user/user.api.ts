import { Router, Request, Response } from 'express';
import { UserService } from '../../bs/service/user.service';
import {UserModel} from '../../bs/model/user.model';

export const user = Router();
const userService = new UserService();
const _badRequestMessage: string = 'Error: Bad Request';

// Create user
user.post('/user', async (req: Request,res: Response) => {

    if(req.body?.user){
        userService.createUser(req.body.user).then((user: UserModel) => {
            res.status(200).send(user);
        });
    } else {
        res.status(400).send(_badRequestMessage);
    }
});

// Get user by id
user.get('/user/:id', async (req: Request,res: Response) => {
    
    if(req.params?.id){
    
        const id: number = parseInt(req.params.id);
    
        userService.getUser(id).then((user: UserModel) => {
            res.status(200).send(user);
        });
    } else {
        res.status(400).send(_badRequestMessage);
    }
});

// Update user password
user.patch('/user/:id', async (req: Request,res: Response) => {
    
    if(req.params?.id && req.body?.user){
    
        if(!req.body.user?.id){
            req.body.user['id'] = parseInt(req.params.id);
        }

        userService.updateUserPassword(req.body.user).then((user: UserModel) => {
            res.status(200).send(user);
        });
    } else {
        res.status(400).send(_badRequestMessage);
    }
});

// Delete user by id
user.delete('/user/:id', async (req,res) => {
    
    if(req.params?.id){
    
        const id: number = parseInt(req.params.id);
    
        userService.deleteUser(id).then((isDeleted: boolean) => {
            if(isDeleted){
                res.sendStatus(200);
            } else {
                res.sendStatus(500); 
            }
        });
    } else {
        res.status(400).send(_badRequestMessage);
    }
});