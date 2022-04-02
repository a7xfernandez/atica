import { Tracking } from 'src/trackings/entities/tracking.entity';
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

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    WeigthCapacity:number;

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    WeigthCapacityUsed:number;

    @ManyToOne(()=>Tracking,(tracking)=>tracking.id)
    tracking!: Tracking;

    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;

}
