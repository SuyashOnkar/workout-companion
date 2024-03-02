import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from './template.entity';
import { TemplateExercise } from './template-exercise.entity';
import { CreateTemplateDto } from './template.dto';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private templateRepository: Repository<Template>,
    @InjectRepository(TemplateExercise)
    private templateExerciseRepository: Repository<TemplateExercise>
  ) {}

  findAll(): Promise<Template[]> {
    return this.templateRepository.find();
  }

  findOne(id: string): Promise<Template> {
    return this.templateRepository.findOne({ where: { id } });
  }

  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const { name, exerciseIds } = createTemplateDto;

    const template = new Template();
    template.name = name;

    const savedTemplate = await this.templateRepository.save(template);

    await Promise.all(
      exerciseIds.map((exerciseId) => this.mapExerciseToTemplate(savedTemplate.id, exerciseId))
    );

    return savedTemplate;
  }

  private async mapExerciseToTemplate(templateId: string, exerciseId: string): Promise<void> {
    const templateExercise = new TemplateExercise();
    templateExercise.template_id = templateId;
    templateExercise.exercise_id = exerciseId;

    await this.templateExerciseRepository.save(templateExercise);
  }
}
