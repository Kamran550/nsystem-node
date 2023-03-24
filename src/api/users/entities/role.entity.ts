import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Permission } from './permission.entity';


@Entity('roles', { synchronize: false })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: true })
  name: string;

  @Column({ type: 'int' })
  level: number;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @ManyToMany(() => Permission)
  @JoinTable({
    name: 'roles_permissions',
    joinColumn: { name: 'role_uuid' },
    inverseJoinColumn: { name: 'permission_uuid' },
    synchronize: false
  })
  permissions: Permission[];
}
