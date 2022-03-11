import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class ShippingType {

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
