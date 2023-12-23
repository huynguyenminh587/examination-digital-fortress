import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { City } from './city.entity';

@Entity()
export class Area extends BaseEntity {
  @PrimaryGeneratedColumn()
  areaID: number;

  @Column()
  areaName: string;

  @ManyToOne(() => City, (city) => city.areas)
  @JoinColumn({ name: 'cityID' })
  city: City;
}