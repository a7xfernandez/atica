import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class AccountTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 45 })
  userType: string;

  @Column({ default: true })
  isActive: string;
}