import express,{Application, Request, Response} from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import { Coupon } from './entity/Coupon';
import { Store } from './entity/Store';
import { getRepository } from 'typeorm';
import entityRoutes from './routes/entity.routes'



const app : Application = express()

createConnection()
.then(connection => {}).catch(error => console.log(error));


app.use(express.json());

app.use(entityRoutes);

app.listen(3000, () => console.log('servidor inicializado'));