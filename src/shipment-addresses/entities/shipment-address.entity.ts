import { Customer } from 'src/customers/entities/customer.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn } from 'typeorm';

@Entity()
export class ShipmentAddress {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    /*@ManyToOne(()=>Customer, customer => customer.id)
    @JoinColumn()
    customer:Customer;    */

    @Column()
    contactName: string;

    @Column()
    phoneNumber1: string;

    @Column()
    phoneNumber2: string;

    @Column()
    email: string;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipCode: string;    

    @Column()
    country: string;

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
    
}
