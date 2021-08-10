import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: "stores"})
export class Store{

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column("character varying")    
    name: string;

    @Column("character varying")
    address: string;
}