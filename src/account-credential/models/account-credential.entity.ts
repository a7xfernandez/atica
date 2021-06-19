import { AccountEntity } from 'src/account/models/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';


@Entity()
@Index(["account", "credential"], { unique: true })
export class AccountCredentialEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  credential: string;

  @Index()
  @ManyToOne(() => AccountEntity, (account) => account.id)
  account: AccountEntity;

  @Column({ default: true })
  isActive: string;
}
