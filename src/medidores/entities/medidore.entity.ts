
import { Pecera } from 'src/peceras/entities/pecera.entity';
import { Entity, PrimaryGeneratedColumn,  DeleteDateColumn, UpdateDateColumn, CreateDateColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class Medidore {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pecera, (pecera)=>pecera.id)
    pecera!: Pecera;
    
    @Column({ length: 45, nullable: false })
    apiKey: string;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
