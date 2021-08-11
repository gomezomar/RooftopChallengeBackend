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
};


export const postCoupon = async (req: Request, res: Response): Promise<Response> =>{
    const expires_at = req.body.expires_at
    const code = req.body.code
    console.log(code)

    const num : number= code.length  
    console.log(num)
    if(expires_at == null) {
        return res.status(422).send('unprocessable code');    
    }
    if (num == 8) {
        const validator = new RegExp('^[A-Z0-9]+$','i')
        if (!validator.test(code)) {
            return res.status(422).send('unprocessable code'); 
        }else{
           const newCoupon = getRepository(Coupon).create(req.body);
           const result= await getRepository(Coupon).save(newCoupon);
           return res.status(200).json(result)
        }
    } else {
        return res.status(422).send('unprocessable code');
    }
};




export const postStore = async (req: Request, res: Response): Promise<Response> =>{
    const name = req.body.name.length
    const address = req.body.address.length
    console.log(name)

    const ziseName : number = name.length 
    const ziseAddress : number= address.length 
    console.log(address)

    if( ziseName == 0 || ziseAddress== 0 ) {
        return res.status(422).send('unprocessable code');    
    }else{
        const newStore = getRepository(Store).create(req.body);
        const result= await getRepository(Store).save(newStore);
        return res.status(200).json(result)
        
    }
};


            
            


        
