import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Company {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Index({ unique: true })
    @Column({ length: 45 })
    description: string;

    @Column({ length: 255, nullable: false })
    logoPath: string;

    @Column({ length: 45, nullable: false })
    officeInfo: string;

    @Column({ length: 45, nullable: false })
    wareHouseInfo: string;

    @Column({ length: 45, nullable: false })
    officeDirection: string;

    @Column({ length: 45, nullable: false })
    wareHouseDirection: string;

    @Column({ length: 45, nullable: false })
    officePhone: string;

    @Column({ length: 45, nullable: false })
    wareHousePhone: string;

    @Column({ length: 45, nullable: false })
    officeFax: string;

    @Column({ length: 45, nullable: false })
    wareHouseFax: string;

    @Column({ length: 45, nullable: false })
    email: string;

    @Column({ length: 45, nullable: false })
    webSite: string;

    @Column({ length: 45, nullable: false })
    slogan: string;
  
    @Column({ default: true })
    isActive: string;  
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
}
