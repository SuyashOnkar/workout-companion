import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>
  ) {}

  findAll(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }

  findOne(id: string): Promise<Exercise> {
    return this.exerciseRepository.findOne({ where: { id } });
  }
}
