import express,{Application, Request, Response} from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import { Coupon } from './entity/Coupon';
import { Store } from './entity/Store';
import { getRepository } from 'typeorm';

const app : Application = express();

const connection = createConnection()
.then(connection => {}).catch(error => console.log(error));



app.get('/coupons',async function (req: Request, res:Response){
    const coupons = await getRepository(Coupon).find();
    return res.json(coupons);

})








app.listen(3000, () => console.log('servidor inicializado'));

console.log('server on port,3000');