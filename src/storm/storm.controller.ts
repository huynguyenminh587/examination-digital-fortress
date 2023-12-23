import { Controller, Get, Param } from '@nestjs/common';
import { StormService } from './storm.service';

@Controller('storms')
export class StormController {
  constructor(private readonly stormService: StormService) {}

  @Get(':cityName')
  async getStormsByCity(@Param('cityName') cityName: string) {
    const storms = await this.stormService.getStormsByCity(cityName);
    return { storms };
  }
}
