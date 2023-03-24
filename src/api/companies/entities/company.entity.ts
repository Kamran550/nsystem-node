import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('companies', { synchronize: false })
export class Company {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  slug: string;

  @ApiProperty()
  @Column({ type: 'longtext' })
  description: string;

  @ApiProperty()
  @Column()
  companyCode: string;

  @ApiProperty()
  @Column()
  vatCode: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  postCode: string;

  @ApiProperty()
  @Column()
  city: string;

  // TODO add country relation

  @ApiProperty()
  @Column()
  website: string;

  @ApiProperty()
  @Column()
  phone: string;

  @ApiProperty()
  @Column()
  breakMinutes: number;

  @ApiProperty()
  @Column()
  workHoursPerDay: number;

  @ApiProperty()
  @Column()
  timeRegistrationAvailability: number;

  @ApiProperty()
  @Column()
  workHoursPerDayChanges: string;

  @ApiProperty()
  @Column()
  firstTimeEmailSentAt: Date;

  @ApiProperty()
  @Column()
  workHoursPerDayOnWeekend: number;

  @ApiProperty()
  @Column()
  workHoursPerDayOnWeekendChanges: string;

  @ApiProperty()
  @Column()
  timeThresholdForBreakTime: number;

  // TODO add relation to users
  @ApiProperty()
  @Column()
  warehouseResponsibleUuid: string;

  @ApiProperty()
  @Column()
  webRegistered: boolean;

  @ApiProperty()
  @Column()
  isToolsVisible: boolean;

  @ApiProperty()
  @Column()
  deactivatedAt: Date;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty()
  @DeleteDateColumn()
  deletedAt: Date;
}
