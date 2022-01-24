import { IsEmail } from 'class-validator';
import { AccountsType } from 'src/accounts-types/entities/accounts-type.entity';
import { Address } from 'src/addresses/entities/address.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  firstName: string;

  @Column({ length: 45, nullable: false })
  lastName: string;

  @Index()
  @Column({ length: 45, nullable: false })
  userName: string;

  @Index()
  @IsEmail()
  @Column({ length: 45, unique: true, nullable: false })
  email: string;

  @ManyToOne(() => AccountsType, (accountType) => accountType.id)
  accountType: AccountsType;

  @OneToMany(()=>Address,(address)=>address.account)  
  address: Address[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
