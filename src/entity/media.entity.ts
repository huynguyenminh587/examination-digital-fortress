import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class Media extends BaseEntity {
  @PrimaryGeneratedColumn()
  mediaID: number;

  @Column()
  mediaType: string;

  @Column()
  mediaURL: string;

  @ManyToOne(() => Comment, (comment) => comment.media)
  @JoinColumn({ name: 'commentID' })
  comment: Comment;
}