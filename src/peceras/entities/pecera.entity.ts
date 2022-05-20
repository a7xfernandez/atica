
import { Finca } from 'src/fincas/entities/finca.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Pecera {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Finca, (finca)=>finca.id)
    finca!: Finca;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
