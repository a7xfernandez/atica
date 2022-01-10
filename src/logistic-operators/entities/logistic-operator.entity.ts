import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class LogisticOperator {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    Country: string;

    @Column()
    ZipCode: string;

    @Column()
    City: string;

    @Column()
    Street: string;

    @Column()
    Suite: string;

    @Column()
    ContactNumber: string;
    
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
}
