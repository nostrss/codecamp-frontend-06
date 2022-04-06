import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FetchBoards {
  @PrimaryGeneratedColumn('')
  _id!: number;

  @Column({ type: 'text' })
  writer!: string;

  @Column({ type: 'text' })
  title!: string;

  @Column({ type: 'text' })
  contents!: string;
}
