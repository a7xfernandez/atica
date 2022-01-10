import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Embarcation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    EstimatedDepartureDate: Date;

    @Column()
    EstimatedArrivingDate: Date;

    @Column()
    VeselNumber: string;

    @Column()
    LogisticOperatorId: number;

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;

}
