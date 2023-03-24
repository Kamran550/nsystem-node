import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';
import { Status } from './status.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity('users', { synchronize: false })
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role_uuid' })
  role: Role;

  @ManyToOne(() => Status)
  @JoinColumn({ name: 'status_uuid' })
  status: Status;

  @ApiProperty()
  @Column()
  firstName: string;

  @ApiProperty()
  @Column({ default: '' })
  lastName: string;

  @ApiProperty()
  @Column()
  fullName: string;

  @ApiProperty()
  @Column()
  @Index('users_email_unique', { unique: true })
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  password: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @ApiProperty()
  @Column({ nullable: true })
  address: string;

  @ApiProperty()
  @Column({ nullable: true })
  phone: string;

  @ApiProperty()
  @Column({ default: 'lt', nullable: true })
  defaultLocale: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  workFrom: Date;

  @ApiProperty()
  @Column({ nullable: true })
  clothingSize: string;

  @ApiProperty()
  @Column({ nullable: true })
  shoeSize: string;

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  workTo: Date;

  @ApiProperty()
  @Column({ nullable: true })
  companyCode: string;

  @ApiProperty()
  @Column({ nullable: true })
  contactPerson: string;

  @ApiProperty()
  @Column({ type: 'bool', width: 1 })
  shouldVerify: boolean;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  emailVerifiedAt: Date;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @ApiProperty()
  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Column({ length: 100, nullable: true })
  rememberToken: string;

  @ApiProperty()
  @Index('users_deleted_at_index')
  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
