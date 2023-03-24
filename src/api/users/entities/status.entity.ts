import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('statuses', { synchronize: false })
export class Status {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  modelClass: string;

  @Column({ type: 'json', nullable: true })
  meta: string;
}
