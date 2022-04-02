import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrackingDto } from './dto/create-tracking.dto';
import { UpdateTrackingDto } from './dto/update-tracking.dto';
import { Tracking } from './entities/tracking.entity';

@Injectable()
export class TrackingsService {

  constructor(
    @InjectRepository(Tracking)
    private trackingRepository: Repository<Tracking>,
  ){}

  async create(createTrackingDto: CreateTrackingDto) {
    return await this.trackingRepository.save(createTrackingDto);
  }

  async findAll() {
    return await this.trackingRepository.find();
  }

  async findOne(id: number) {
    return await this.trackingRepository.findOne(id);
  }

  async update(id: number, updateTrackingDto: UpdateTrackingDto) {
    return await this.trackingRepository.update(id,updateTrackingDto);
  }

  async remove(id: number) {
    return await this.trackingRepository.softDelete(id);
  }
}
