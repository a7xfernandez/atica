import { Account } from 'src/accounts/entities/account.entity';
import { Address } from 'src/addresses/entities/address.entity';
import { Embarcation } from 'src/embarcations/entities/embarcation.entity';
import { LogisticOperator } from 'src/logistic-operators/entities/logistic-operator.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { PackageType } from 'src/package-types/entities/package-type.entity';
import { ServiceType } from 'src/service-types/entities/service-type.entity';
import { ShippingType } from 'src/shipping-types/entities/shipping-type.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    JoinColumn,
  } from 'typeorm';

@Entity()
export class Order {    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  orderDate!: Date;

  @ManyToOne(() =>Account, (account)=>account.id)
  customer: Account;

  @ManyToOne(()=> Address,(address)=>address.id)
  shippingAddress!:Address;

  @ManyToOne(()=> Address,(address)=>address.id)
  destinationAddress!:Address;

  @ManyToOne(()=>ShippingType,(shippingType)=>shippingType.id)
  shippingType!: ShippingType;

  @ManyToOne(()=>ServiceType,(serviceType)=>serviceType.id)
  serviceType!: ServiceType;

  @ManyToOne(()=>PackageType,(packageType)=>packageType.id)
  packageType!:PackageType;

  @Column({nullable:false})
  packageCant!: number;

  @Column({ length: 255, nullable: true })
  packageContent: string;

  @Column({ length: 45, nullable: true })
  packageDimensions: string;

  @Column({ nullable: true, type: "decimal",  precision: 7, scale: 2 })
  packageweigth:number;  

  @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
  value:number;  

  @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
  serviceCost:number;  

  @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
  marineInsurance:number;  

  @ManyToOne(()=>LogisticOperator, (logisticOperator)=>logisticOperator.id)
  logisticOperator!:LogisticOperator;

  @ManyToOne(()=>Embarcation, (embarcation)=>embarcation.id)
  embarcation!: Embarcation;

  @OneToMany(orderDetail=>OrderDetail,orderDetail=>orderDetail.id)
  @JoinColumn()
  orderDetail!:OrderDetail[];

  @Column({nullable:false})
  itemCant!: number;

  @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
  total:number;  

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deletedAt?: Date;    
}
