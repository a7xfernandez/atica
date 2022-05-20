
import { Medidore } from 'src/medidores/entities/medidore.entity';
import { Proyecto } from 'src/proyectos/entities/proyecto.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne } from 'typeorm';
@Entity()
export class Temperature {    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ nullable: false, type: "decimal",  precision: 5, scale: 2 })
    temperatureCelcius:number;  

    @ManyToOne(()=> Proyecto, (proyecto)=>proyecto.id)
    proyecto!: Proyecto;

    @ManyToOne(()=>Medidore, (medidore)=>medidore.id)
    medidore!: Medidore;
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;  
}
