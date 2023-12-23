import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';
import { City } from './city.entity';
import { Comment } from './comment.entity';

@Entity()
export class StormInformation extends BaseEntity {
  @PrimaryGeneratedColumn()
  stormID: number;

  @Column()
  numberOfAffectedAreas: number;

  @Column()
  detectedTime: Date;

  // Add other relevant storm information columns

  @ManyToOne(() => City, (city) => city.storms)
  @JoinColumn({ name: 'cityID' })
  city: City;

  @OneToMany(() => Comment, (comment) => comment.storm)
  comments: Comment[];
}