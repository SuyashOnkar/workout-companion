import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Template } from './template.entity';
import { TemplateExercise } from './template-exercise.entity';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';

@Module({
  imports: [TypeOrmModule.forFeature([Template, TemplateExercise])],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
