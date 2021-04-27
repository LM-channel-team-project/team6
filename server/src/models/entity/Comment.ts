import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 0 })
  hits: number;

  // Post(1) <-> Comment(*)
  @ManyToOne((type) => Post, (post) => post.comments, {
    nullable: false,
    onDelete: "CASCADE",
  })
  post: Post;

  // User(1) <-> Comment(*)
  @ManyToOne((type) => User, (user) => user.comments, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;
}
