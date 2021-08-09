import Express,{Application, Request, Response, } from 'express'
import "reflect-metadata"
import {createConnection} from 'typeorm'
import {coupon} from "./entity/coupon";
import {store} from "./entity/store";

const app : Application  = Express();

createConnection()
.then(connection => {
    console.log('its ok')
}).catch(error => console.log(error));

app.get('/coupons',(req: Request, res:Response)=> {







    res.send("nuestro primer aplicacion n")
})

app.listen(3000, () => console.log('servidor inicializado'));

console.log('server on port,3000');