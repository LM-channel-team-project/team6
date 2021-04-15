import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, unique: true, default: "" })
  nickname: string;

  @Column({ length: 45, unique: true, default: "" })
  email: string;

  @Column({ length: 45, nullable: false, default: "" })
  password: string;

  // User(1) <-> Post(*)
  @OneToMany((type) => Post, (post) => post.user, { cascade: true })
  posts: Post[];

  // User(1) <-> Comment(*)
  @OneToMany((type) => Comment, (comments) => comments.user, { cascade: true })
  comments: Comment[];
}
