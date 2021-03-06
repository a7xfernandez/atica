import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class Tracking {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Index({ unique: true })
    @Column({ length: 45 })
    description: string;
  
    @Column({ default: true })
    isActive: string;  
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
}
