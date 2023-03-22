import express from 'express';
import { v1 as uuidv1 } from 'uuid';


const router = express.Router();

let users = [];

router.get('/', (req, res)=> {
   

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv1() });

    res.send(`User ith the name added to the database`);
});

router.get('/:id', (req,res) => {

    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id) 

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => user.id === id);

    res.send("User with the id deleted from the database");
});

export default router;