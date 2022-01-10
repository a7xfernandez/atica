import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLogisticOperatorDto } from './dto/create-logistic-operator.dto';
import { UpdateLogisticOperatorDto } from './dto/update-logistic-operator.dto';
import { LogisticOperator } from './entities/logistic-operator.entity';

@Injectable()
export class LogisticOperatorsService {
  constructor(
    @InjectRepository(LogisticOperator)
    private logisticOperatorRepository: Repository<LogisticOperator>,
  ) {}

  async create(createLogisticOperatorDto: CreateLogisticOperatorDto) {
    return await this.logisticOperatorRepository.save(createLogisticOperatorDto);
  }

  async findAll(limitSkip: number, limitTake: number) {
    return await this.logisticOperatorRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return await this.logisticOperatorRepository.findOne(id);
  }

  async update(id: number, updateLogisticOperatorDto: UpdateLogisticOperatorDto) {
    return await this.logisticOperatorRepository.update(id,updateLogisticOperatorDto);
  }

  async remove(id: number) {
    return await this.logisticOperatorRepository.softDelete(id);
  }
}
