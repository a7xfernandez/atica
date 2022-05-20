import { Proceso } from 'src/procesos/entities/proceso.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';
@Entity()
export class Lote {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Proceso, (proceso)=>proceso.id)
    proceso!: Proceso;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
