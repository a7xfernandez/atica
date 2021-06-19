import { AccountEntity } from 'src/account/models/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index } from 'typeorm';


@Entity()
export class AccountInfoKeysEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb', nullable: false })
  keys: object;

  @Index({ unique: true })
  @ManyToOne(() => AccountEntity, (account) => account.id)
  account: AccountEntity;

  @Column({ default: true })
  isActive: string;
}
