import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// 여기는 타입스크립트 타입
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  number!: number;

  @Column({ type: 'text' })
  writer!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  contents!: string;
  // deletedAt : Date // soft delete
}
