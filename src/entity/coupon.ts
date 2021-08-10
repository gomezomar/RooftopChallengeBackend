import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity({name: "coupons"})
export class Coupon{
    
    @Column()
    assigned_at: Date;

    @Column({
        length: 8
    })    
    code: string ;

    @Column()
    customer_email:string;

    @PrimaryColumn()
    id:number;

    @Column()
    expires_at:Date;
}