import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmbarcationDto } from './dto/create-embarcation.dto';
import { UpdateEmbarcationDto } from './dto/update-embarcation.dto';
import { Embarcation } from './entities/embarcation.entity';

@Injectable()
export class EmbarcationsService {
  constructor(
    @InjectRepository(Embarcation)
    private embarcationRepository: Repository<Embarcation>,
  ) {}

  async create(createEmbarcationDto: CreateEmbarcationDto) {
    return await this.embarcationRepository.save(createEmbarcationDto);
  }

  async findAll(limitSkip: number, limitTake: number) {
    return await this.embarcationRepository.find({
      order: {
        id: 'DESC',
      },
      skip: limitSkip,
      take: limitTake,
    });
  }

  async findOne(id: number) {
    return await this.embarcationRepository.findOne(id);
  }

  async update(id: number, updateEmbarcationDto: UpdateEmbarcationDto) {
    return await this.embarcationRepository.update(id, updateEmbarcationDto);
  }

  async remove(id: number) {
    return await this.embarcationRepository.softDelete(id);
  }
}
