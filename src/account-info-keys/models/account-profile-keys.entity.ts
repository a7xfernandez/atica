import { AccountEntity } from 'src/account/models/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index, OneToOne, JoinColumn } from 'typeorm';


@Entity()
export class AccountProfileKeysEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb', nullable: false })
  keys: object;

  @OneToOne(() => AccountEntity)
  @JoinColumn()
  account: AccountEntity;

  @Column({ default: true })
  isActive: string;

  
}
