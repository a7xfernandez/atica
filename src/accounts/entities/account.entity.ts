import { IsEmail } from 'class-validator';
import { AccountsType } from 'src/accounts-types/entities/accounts-type.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  firstName: string;

  @Column({ length: 45 })
  lastName: string;

  @Index()
  @Column({ length: 45 })
  userName: string;

  @Column({ length: 45 })
  @IsEmail()
  email: string;

  @ManyToOne(() => AccountsType, (accountType) => accountType.id)
  accountType: AccountsType;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
