import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { Exercise } from './exercise.entity';

@Controller('exercise')
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Get()
  findAll(): Promise<Exercise[]> {
    return this.exerciseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Exercise> {
    return this.exerciseService.findOne(id);
  }
}
