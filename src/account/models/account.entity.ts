import { IsEmail } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm';
import { AccountTypeEntity } from '../../account-type/models/account-type.entity';

@Entity()
export class AccountEntity {
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

  @ManyToOne(() => AccountTypeEntity, (accountType) => accountType.id)
  accountType: AccountTypeEntity;
}
