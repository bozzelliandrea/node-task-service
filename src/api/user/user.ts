import { Router, Request, Response } from 'express';
import { User } from '../../db/entity/user.model';

const user = Router();

user.post('/user', async (req: Request,res: Response) => {
    const user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    await user.save();
    res.sendStatus(200);
});

user.get('/user/:id', async (req: Request,res: Response) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if (user){
        res.json(user);
    } else {
        res.status(404).send({message: "User not found"})
    }
});

export {user};