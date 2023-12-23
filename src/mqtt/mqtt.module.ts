import { Module } from '@nestjs/common';
import { MqttClientService } from './mqtt.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [MqttClientService,],
  exports: [MqttClientService],
})
export class MqttClientModule {}