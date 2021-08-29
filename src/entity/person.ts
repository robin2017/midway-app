import { EntityModel } from '@midwayjs/orm';
import { Column,PrimaryColumn } from 'typeorm';
@EntityModel('person')
export class Person {
    @PrimaryColumn()
    name:string;

    @Column()
    age:number;
}