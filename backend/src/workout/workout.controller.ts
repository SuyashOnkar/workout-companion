import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { Workout } from './workout.entity';
import { CreateWorkoutDto } from './workout.dto';

@Controller('workout')
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {}

  @Get()
  findAll(): Promise<Workout[]> {
    return this.workoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Workout> {
    return this.workoutService.findOne(id);
  }

  @Post()
  create(@Body() createWorkoutDto: CreateWorkoutDto): Promise<Workout> {
    return this.workoutService.create(createWorkoutDto);
  }
}
