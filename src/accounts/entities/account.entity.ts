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
  JoinColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, nullable: false })
  firstName: string;

  @Column({ length: 45, nullable: false })
  lastName: string;

  @Column({ length: 45, nullable: true })
  middleName: string;

  @Index()
  @Column({ length: 45,nullable: false })
  userName: string;

  @Index()
  @IsEmail()
  @Column({ length: 45, unique: true, nullable: false })
  email: string;

  @Column({ length: 45, nullable: true })
  telephone: string;

  @Column({ length: 45, nullable: true })
  companyName: string;

  @ManyToOne(() => AccountsType, (accountType) => accountType.id)
  accountType: AccountsType;

  @OneToMany(type => Address,address=>address.account)
  @JoinColumn()  
  addresses: Address[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
