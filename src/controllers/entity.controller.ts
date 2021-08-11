import {Request, Response} from 'express';
import express from 'express'
import { getRepository } from 'typeorm';
import { Coupon } from '../entity/Coupon';
import { Store } from '../entity/Store';


export const consultCoupon = async (req: Request, res: Response): Promise<Response> =>{

    const email = req.query.email
    const code = req.query.code
    

    const coupon = await getRepository(Coupon).findOne({
        where:{
            "customer_email": email,
            "code" : code
        }
    });
    
    if (coupon!=null) {
        return res.status(200).send(coupon);
    }else{
        return res.status(404).send('not found');
    }
};


export const getStores = async (req: Request, res:Response): Promise<Response> =>{
    
    const page: number = Number(req.query.page) 
    const name = req.query.name
    

    const stores = await getRepository(Store).find();
    const numStores = stores.length

    if (name != null) {
        const store = await getRepository(Store).findOne({
            where:{
                "name" :name
            }
        });
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
                
            return res.status(200).send('number of stores available:'+ numStores +' <br/>page store: '+ page + ' <br/> '+ results)
        }
    };

    const results = JSON.stringify(stores.slice(0,10))
    return res.status(200).send('number of stores available:'+ numStores +' <br/>page store:'+ '1' + ' <br/> '+ results)
};


export const createCoupon = async (req: Request, res: Response): Promise<Response> =>{
    const expires_at = req.body.expires_at
    const code = req.body.code
    

    const num : number= code.length  
    
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


export const createStore = async (req: Request, res: Response): Promise<Response> =>{
    const name = req.body.name
    const address = req.body.address
    
    const ziseName = name.length 
    const ziseAddress = address.length 
    
    if((ziseName == 0)||(ziseAddress == 0)) {
        return res.status(422).send('unprocessable code');    
    }else{
        const newStore = getRepository(Store).create(req.body);
        const result= await getRepository(Store).save(newStore);
        return res.status(200).json(result)
    }
};


export const assignCoupon = async (req: Request, res: Response): Promise<Response> =>{
    const customer_email = req.body.customer_email
    console.log(customer_email)
    //const validator = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$')

    if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(customer_email))) {
        console.log("say hi")
        return res.status(422).send('unprocessable code'); 
    }else{
        console.log(customer_email)
       const coupon =await getRepository(Coupon).findOne({
            where:{
                "customer_email": customer_email
            }
        });
        if (coupon != null) {
            console.log('say bye')
            return res.status(422).send('unprocessable code');
        }else{
           const voucher = await getRepository(Coupon).findOneOrFail({
            where:{
                "customer_email": null
            }
        });
            getRepository(Coupon).merge(voucher,req.body);
            voucher.assigned_at= Date()
            console.log(voucher.assigned_at)
            const result = await getRepository(Coupon).save(voucher);
            console.log(voucher) 
            return res.json(result)
        }
    }
};

