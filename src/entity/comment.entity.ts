// Comment.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity, OneToMany } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { StormInformation } from './strorminfor.entity';
import { Media } from './media.entity';

@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  commentID: number;

  @Column()
  commentText: string;

  @Column()
  commentTime: Date;

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: 'userID' })
  user: User;

  @ManyToOne(() => StormInformation, (storm) => storm.comments)
  @JoinColumn({ name: 'stormID' })
  storm: StormInformation;

  @OneToMany(() => Media, (media) => media.comment)
  media: Media[];
}
