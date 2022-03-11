import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {

  constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ){}

  async create(createCountryDto: CreateCountryDto) {
    return await this.countryRepository.save(createCountryDto);
  }

  async findAll() {
    return await this.countryRepository.find();
  }

  async findOne(id: number) {
    return await this.countryRepository.findOne(id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return await this.countryRepository.update(id,updateCountryDto);
  }

  async remove(id: number) {
    return await this.countryRepository.softDelete(id);
  }
}
