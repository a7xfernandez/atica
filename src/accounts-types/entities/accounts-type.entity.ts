import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AccountsType {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 45 })
  userType: string;

  @Column({ default: true })
  isActive: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
