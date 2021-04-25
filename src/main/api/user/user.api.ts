import { Router, Request, Response } from 'express';
import { createUser, getUser, deleteUser, updateUserPassword } from '../../bs/service/user.service';
import * as bodyParser from 'body-parser';
import {UserModel} from '../../bs/model/user.model';

export const user = Router();

const _badRequestMessage: string = 'Error: Bad Request';
const jsonParser = bodyParser.json();

// Create user
user.post('/user',jsonParser,  async (req: Request,res: Response) => {

    if(req.body?.user){
        createUser(req.body.user).then((user: UserModel) => {
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
    
        getUser(id).then((user: UserModel) => {
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

        updateUserPassword(req.body.user).then((user: UserModel) => {
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
    
        deleteUser(id).then((isDeleted: boolean) => {
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