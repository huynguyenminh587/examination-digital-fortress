import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Area } from './area.entity';
import { StormInformation } from './strorminfor.entity';

@Entity()
export class City extends BaseEntity {
  @PrimaryGeneratedColumn()
  cityID: number;

  @Column({ unique: true })
  cityName: string;

  @OneToMany(() => Area, (area) => area.city)
  areas: Area[];

  @OneToMany(() => StormInformation, (storm) => storm.city)
  storms: StormInformation[];
}