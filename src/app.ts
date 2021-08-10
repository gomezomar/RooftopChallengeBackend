import express,{Application, Request, Response} from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import { Coupon } from './entity/Coupon';
import { Store } from './entity/Store';
import { getRepository } from 'typeorm';
import entityRoutes from './routes/entity.routes'
import morgan from 'morgan';
import cors from 'cors'


const app : Application = express()

createConnection()
.then(connection => {}).catch(error => console.log(error));

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(entityRoutes);







app.listen(3000, () => console.log('servidor inicializado'));

console.log('server on port,3000');