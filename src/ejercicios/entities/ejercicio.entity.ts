
import { Lote } from 'src/lotes/entities/lote.entity';
import { Pecera } from 'src/peceras/entities/pecera.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Ejercicio {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Lote, (lote)=>lote.id)
    lote!: Lote;

    @ManyToOne(() => Pecera, (pecera)=>pecera.id)
    pecera!: Pecera;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
