import { Lote } from 'src/lotes/entities/lote.entity';
import { Pecera } from 'src/peceras/entities/pecera.entity';
import { Entity, PrimaryGeneratedColumn,  DeleteDateColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Proyecto {
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
