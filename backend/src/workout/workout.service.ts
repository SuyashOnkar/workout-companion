import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Workout } from './workout.entity';
import { CreateWorkoutDto } from './workout.dto';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private workoutRepository: Repository<Workout>
  ) {}

  findAll(): Promise<Workout[]> {
    return this.workoutRepository.find();
  }

  findOne(id: string): Promise<Workout> {
    return this.workoutRepository.findOne({ where: { id } });
  }

  async create(createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    const workout = this.workoutRepository.create(createWorkoutDto);
    return await this.workoutRepository.save(workout);
  }
}
