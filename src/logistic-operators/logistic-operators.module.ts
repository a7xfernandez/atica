import { Module } from '@nestjs/common';
import { LogisticOperatorsService } from './logistic-operators.service';
import { LogisticOperatorsController } from './logistic-operators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {LogisticOperator} from './entities/logistic-operator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogisticOperator])],
  exports: [TypeOrmModule,LogisticOperatorsService],
  controllers: [LogisticOperatorsController],
  providers: [LogisticOperatorsService]
})
export class LogisticOperatorsModule {}
