import { Injectable } from "@nestjs/common";
import { Account } from "src/accounts/entities/account.entity";
import { Address } from "src/addresses/entities/address.entity";
import { MappingRegistryService } from "src/common/services/mapping-registry.service";
import { MappingService } from "src/common/services/mapping.service";
import { LogisticOperator } from "src/logistic-operators/entities/logistic-operator.entity";
import { CreateOrderDetailDto } from "src/order-details/dto/create-order-detail.dto";
import { OrderDetail } from "src/order-details/entities/order-detail.entity";
import { OrderDetailMappingService } from "src/order-details/order-details-mapping.service";
import { PackageType } from "src/package-types/entities/package-type.entity";
import { ShippingType } from "src/shipping-types/entities/shipping-type.entity";
import { CreateOrderDto } from "./dto/create-order.dto";
import { Order } from "./entities/order.entity";

@Injectable()
export class OrderMappingService extends MappingService {
    static mappingRegistryService: MappingRegistryService;
    public addMapping(): void {
        automapper.createMap(Order.name,CreateOrderDto.name);
    }
    public static toEntityOrder(createOrderDto: CreateOrderDto){
        let orderEntity = new Order();
        let customer = new Account();
        let shippingAddress = new Address();
        let destinationAddress = new Address();
        let shippingType = new ShippingType();
        let packageType = new PackageType();
        let logisticOperator = new LogisticOperator();
        let orderDetail= new OrderDetail();

        orderEntity.orderDate = createOrderDto.general.orderDate;
        customer.id = createOrderDto.shipper.customer;
        orderEntity.customer = customer;
        shippingAddress.id = createOrderDto.shipper.shippingAddress;
        orderEntity.shippingAddress = shippingAddress;
        destinationAddress.id = createOrderDto.shipper.destinationAddress;
        orderEntity.destinationAddress = destinationAddress;
        shippingType.id = createOrderDto.shipping.shippingType;
        orderEntity.shippingType = shippingType;
        packageType.id = createOrderDto.shipping.packageType;
        orderEntity.packageType = packageType;
        orderEntity.packageCant = createOrderDto.shipping.packageCant;
        orderEntity.packageContent = createOrderDto.shipping.packageContent;
        orderEntity.packageDimensions = createOrderDto.shipping.packageDimensions;
        orderEntity.packageweigth = createOrderDto.shipping.packageweigth;
        orderEntity.value = createOrderDto.shipping.value;
        orderEntity.serviceCost = createOrderDto.shipping.serviceCost;
        orderEntity.marineInsurance = createOrderDto.shipping.marineInsurance;
        logisticOperator.id = createOrderDto.embarcation.logisticOperator;
        orderEntity.logisticOperator = logisticOperator;

        orderEntity.orderDetail = OrderDetailMappingService.toEntityOrderDetailList(createOrderDto.orderDetail);        

        return orderEntity;
    }
}