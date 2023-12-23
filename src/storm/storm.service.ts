import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StormInformation } from 'src/entity/strorminfor.entity';

@Injectable()
export class StormService {
  constructor(
    @InjectRepository(StormInformation)
    private readonly stormRepository: Repository<StormInformation>,
  ) {}

  async getStormsByCity(cityName: string): Promise<StormInformation[]> {
    return this.stormRepository
      .createQueryBuilder('storm')
      .leftJoinAndSelect('storm.city', 'city')
      .where('city.cityName = :cityName', { cityName })
      .orderBy('city.cityName', 'DESC')
      .addOrderBy('storm.detectedTime', 'ASC')
      .getMany();
  }
}
