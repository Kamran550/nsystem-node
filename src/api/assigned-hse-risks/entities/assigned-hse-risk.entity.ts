import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { HseRiskCategory } from '../../hse-risk-categories/entities/hse-risk-category.entity';
import { HseRiskTemplate } from '../../hse-risk-templates/entities/hse-risk-template.entity';
import { Company } from '../../companies/entities/company.entity';
import { AssignedHseRiskTranslation } from './assigned-hse-risks-translations.entity';
import { CompanyHseRiskTemplate } from '../../company-hse-risk-templates/entities/company-hse-risk-template.entity';
import { User } from '../../users/entities/user.entity';


@Entity('assigned_hse_risks')
export class AssignedHseRisk {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @ApiProperty()
  @Column({ type: 'uuid' })
  hseRiskCategoryUuid: string;

  @ApiProperty()
  @ManyToOne(() => HseRiskCategory)
  @JoinColumn({ name: 'hse_risk_category_uuid' })
  hseRiskCategory: HseRiskCategory;

  @ApiProperty()
  @Column({ type: 'uuid', nullable: true })
  hseRiskTemplateUuid: string;

  @ApiProperty()
  @ManyToOne(() => HseRiskTemplate)
  @JoinColumn({ name: 'hse_risk_template_uuid' })
  hseRiskTemplate: HseRiskTemplate;

  @ApiProperty()
  @Column({ type: 'uuid', nullable: true })
  companyHseRiskTemplateUuid: string;

  @ApiProperty()
  @ManyToOne(() => CompanyHseRiskTemplate)
  @JoinColumn({ name: 'company_hse_risk_template_uuid' })
  companyHseRiskTemplate: CompanyHseRiskTemplate;

  @ApiProperty()
  @Column()
  companyUuid: string;

  @ManyToOne(() => Company, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'company_uuid' })
  company: Company;

  @ApiProperty()
  @Column({ type: 'uuid' })
  responsibleUserUuid: string;

  @ApiProperty()
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'responsible_user_uuid' })
  responsibleUser: User;

  @ApiProperty()
  @Column()
  assessmentDate: Date;

  @ApiProperty()
  @Column()
  status: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ type: 'json' })
  barriers: object;

  @ApiProperty()
  @Column()
  probability: number;

  @ApiProperty()
  @Column()
  consequences: number;

  @ApiProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => AssignedHseRiskTranslation, entity => entity.assignedHseRisk)
  translations: AssignedHseRiskTranslation[];
}
