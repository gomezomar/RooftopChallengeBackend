import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity({name: "stores"})
export class Store{

    @PrimaryColumn()
    id: number;

    @Column()    
    name: string;

    @Column()
    adress: string;
}