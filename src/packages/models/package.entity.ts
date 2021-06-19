import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class PackageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  description: string;

  @Column()
  weigth: number;

  @Column()
  WightUnits: string;

  @Column()
  lbsWeigth: number;

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
}
