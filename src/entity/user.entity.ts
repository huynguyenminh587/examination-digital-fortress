import { Comment } from 'src/entity/comment.entity';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}