import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  index!: number;

  @PrimaryGeneratedColumn('uuid')
  _id!: string;

  @Column({ type: 'text' })
  seller!: string;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text' })
  detail!: string;

  @Column({ type: 'integer' })
  price!: number;

  @CreateDateColumn()
  createdAt?: Date;

  @CreateDateColumn()
  deletedAt?: Date;
}
