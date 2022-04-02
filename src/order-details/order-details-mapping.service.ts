import { MappingService } from "src/common/services/mapping.service";
import { CreateOrderDetailDto } from "./dto/create-order-detail.dto";
import { OrderDetail } from "./entities/order-detail.entity";

export class OrderDetailMappingService extends MappingService{
    public addMapping(): void {
        automapper.createMap(CreateOrderDetailDto.name,OrderDetail.name);
    }

    public static toEntityOrderDetail(createOrderDetailDto:CreateOrderDetailDto){
        let orderDetail = new OrderDetail();

        orderDetail.itemsCant = createOrderDetailDto.itemsCant;
        orderDetail.description = createOrderDetailDto.description;
        orderDetail.price = createOrderDetailDto.price;
        orderDetail.discount = createOrderDetailDto.discount;
        orderDetail.taxes = createOrderDetailDto.taxes;
        orderDetail.subtotal = createOrderDetailDto.subtotal;
        
        
        return orderDetail;
    }

    public static toEntityOrderDetailList(createOrderDetailDto:CreateOrderDetailDto[])
    {
        const orderDetailList: OrderDetail[] =[];

        createOrderDetailDto.forEach(element =>orderDetailList.push(this.toEntityOrderDetail(element)));

        return orderDetailList;
    }
}