import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@Entity()
export class HashTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;
}
