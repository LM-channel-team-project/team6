import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Comment } from "./Comment";
import { HashTag } from "./HashTag";
import { User } from "./User";

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45, default: "" })
  title: string;

  @Column({ length: 1000, default: "" })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: 0 })
  hits: number;

  @Column({ default: 0 })
  views: number;

  // User(1) <-> Post(*)
  @ManyToOne((type) => User, (user) => user.posts, {
    nullable: false,
    onDelete: "CASCADE",
  })
  user: User;

  // Post(1) <-> Comment(*)
  @OneToMany((type) => Comment, (comment) => comment.post, { cascade: true })
  comments: Comment[];

  @ManyToMany((type) => HashTag)
  @JoinTable()
  hashtags: HashTag[];
}
