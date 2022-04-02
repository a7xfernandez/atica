import { Order } from 'src/orders/entities/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, Index, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class OrderDetail { 
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Order,order =>order.id)
    @JoinColumn()
    order:Order;
    
    @Column({nullable:false})
    itemsCant!: number;    
  
    
    @Column({ length: 45 })
    description: string;  

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    price:number;  

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    discount:number;  

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    taxes:number;  

    @Column({ nullable: true, type: "decimal",  precision: 9, scale: 2 })
    subtotal:number;  
  
    @CreateDateColumn()
    created!: Date;
  
    @UpdateDateColumn()
    updated!: Date;
  
    @DeleteDateColumn()
    deletedAt?: Date;
}
