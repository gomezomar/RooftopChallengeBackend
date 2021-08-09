import {Column, Entity, PrimaryColumn} from 'typeorm'

@Entity()
export class store{
    @PrimaryColumn()
    id: number;

    @Column()    
    name: string ;

    @Column()
    adress:string;
}