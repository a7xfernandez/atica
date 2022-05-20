import { Company } from 'src/companies/entities/company.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Finca {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Company, (company)=>company.id)
    company!: Company;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
