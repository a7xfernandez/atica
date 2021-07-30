import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Account } from './../../accounts/entities/account.entity';

@Entity()
export class AccountsCredential {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  credential: string;

  @Index()
  @ManyToOne(() => Account, (account) => account.id)
  account: Account;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
