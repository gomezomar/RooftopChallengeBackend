import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: "coupons"})
export class Coupon{
    
    @CreateDateColumn()
    assigned_at: string;

    @Column({
        length: 8
    })    
    code: string ;

    @Column()
    customer_email:string;

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    expires_at:Date;
}