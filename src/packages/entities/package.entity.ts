import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  description: string;

  @Column()
  weigth: number;

  @Column()
  WightUnits: string;

  @Column()
  Weigth: number;

  @Column()
  volumen: number;

  @Column({ length: 25 })
  units: string;

  @Column()
  large: number;

  @Column()
  heigth: number;

  @Column()
  width: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
