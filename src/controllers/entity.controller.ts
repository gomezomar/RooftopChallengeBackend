import {Request, Response} from 'express';
import express from 'express'
import { getRepository } from 'typeorm';
import { Coupon } from '../entity/Coupon';
import { Store } from '../entity/Store';


export const getCoupon = async (req: Request, res: Response): Promise<Response> =>{

    let email = req.query.email
    console.log(email)
    let code = req.query.code
    console.log(code)

    const coupon = await getRepository(Coupon).findOne({
        where:{
            "customer_email": email,
            "code" : code
        }
    });
    console.log(coupon)
    if (coupon!=null) {
        return res.status(200).send(coupon);
    }else{
        return res.status(404).send('not found');
    }
};

export const getStores = async (req: Request, res:Response): Promise<Response> =>{
    let page: number = Number(req.query.page) 
    console.log(page)
    let name = req.query.name
    console.log(name)

    const stores = await getRepository(Store).find();
    let numStores = stores.length;

    if (name != null) {
        const store = await getRepository(Store).findOne({
            where:{
                "name" :name
            }
        })
        if (store != null) {
            return res.status(200).send(store)
        }else{
            return res.status(404).send('store not found');
        }
        
    }else{
        if (page != null && page >0) {
            let ni= page*10;
            let nf=ni+10;
            let results = JSON.stringify(stores.slice(ni,nf))
                
            return res.status(200).send('number of stores available:'+ numStores +'<br/>page store:'+ page + '<br/>'+ results)
                    
            }
        };

        let results = JSON.stringify(stores.slice(0,10))
        
        return res.status(200).send('number of stores available:'+ numStores +'<br/>page store:'+ '1' + '<br/>'+ results)
}
            
            


        
