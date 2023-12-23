import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { City } from './entity/city.entity';
import { StormInformation } from './entity/strorminfor.entity';
import { Media } from './entity/media.entity';
import { Comment } from './entity/comment.entity';
import { Area } from './entity/area.entity';
import { StormController } from './storm/storm.controller';
import { StormService } from './storm/storm.service';
import { MqttClientModule } from './mqtt/mqtt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'huy',
      database: 'examination',
      entities: [User, City, StormInformation, Comment, Media, Area],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, City, StormInformation, Comment, Media, Area]),
    MqttClientModule,
  ],
  controllers: [AppController, StormController],
  providers: [AppService, StormService],
})
export class AppModule { }
