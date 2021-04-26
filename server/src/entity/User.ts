import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Comment } from "./Comment";
import { Post } from "./Post";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, default: "" })
  nickname: string;

  @Column({ length: 45, default: "" })
  username: string;

  @Column({ length: 45, unique: true, default: "" })
  email: string;

  @Column({ length: 80, nullable: false, default: "" })
  password: string;

  @Column({ nullable: true })
  oauthId: string;

  @Column({ nullable: false, default: "local" })
  provider: string;

  // User(1) <-> Post(*)
  @OneToMany((type) => Post, (post) => post.user, { cascade: true })
  posts: Post[];

  // User(1) <-> Comment(*)
  @OneToMany((type) => Comment, (comments) => comments.user, { cascade: true })
  comments: Comment[];
}
