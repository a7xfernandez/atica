import { Account } from 'src/accounts/entities/account.entity';
import { AddressType } from 'src/address-types/entities/address-type.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Account, account => account.id)
    @JoinColumn()
    account: Account;

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

    @Column()
    addressType: number;


    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
}
