import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity()
export class coupon{
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