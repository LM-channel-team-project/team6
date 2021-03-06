import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class HashTag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;
}
