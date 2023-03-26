import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateHseRoutineTemplateDto } from './dto/create-hse-routine-template.dto';
import { UpdateHseRoutineTemplateDto } from './dto/update-hse-routine-template.dto';
import { HseRoutineTemplate } from './entities/hse-routine-template.entity';
import { HseRoutineTemplateTranslation } from './entities/hse-routine-templates-translations.entity';
import { FindWithLangOptions, RepositoryWithLang } from '../../helpers/repository-with-lang';
import { IFindOptions, ILangOptions } from '../../types';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';


@Injectable()
export class HseRoutineTemplatesService {
  hseRoutineTemplatesRepository: RepositoryWithLang<HseRoutineTemplate, HseRoutineTemplateTranslation>;

  constructor(private dataSource: DataSource) {
    this.hseRoutineTemplatesRepository = new RepositoryWithLang(HseRoutineTemplate, dataSource, HseRoutineTemplateTranslation);
  }

  async create(createHseRoutineTemplateDto: CreateHseRoutineTemplateDto, options: ILangOptions) {
    return this.hseRoutineTemplatesRepository.createWithLang(
      createHseRoutineTemplateDto, { ...options, relationKey: 'hseRoutineTemplate' }
    );
  }

  async findAll(options: IFindOptions) {
    const findOptions: FindManyOptions<HseRoutineTemplate> & FindWithLangOptions = {
      lang: options.lang,
      pagination: options.pagination,
      relations: ['hseRoutineCategory', 'hseRoutineCategory.translations']
    };
    if (options.search) findOptions.search = { keys: ['name'], value: options.search };

    return this.hseRoutineTemplatesRepository.findAndCountWithLang(findOptions);
  }

  async findOne(id: string, options: ILangOptions) {
    return this.hseRoutineTemplatesRepository.findOneWithLang({
      where: { uuid: id },
      lang: options.lang,
      hasTranslations: options.hasTranslations
    });
  }

  async update(id: string, updateHseRoutineTemplateDto: UpdateHseRoutineTemplateDto, options: ILangOptions) {
    const target = await this.hseRoutineTemplatesRepository.findOneBy({ uuid: id });
    if (!target) return null;

    return this.hseRoutineTemplatesRepository.updateWithLang(
      target, updateHseRoutineTemplateDto, { ...options, relationKey: 'hseRoutineTemplate' }
    );
  }

  async remove(id: string) {
    const target = await this.hseRoutineTemplatesRepository.findOneBy({ uuid: id });
    if (!target) return null;

    await this.hseRoutineTemplatesRepository.delete({ uuid: id });
    return { success: true };
  }
}
