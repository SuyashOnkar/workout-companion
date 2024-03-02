import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { Workout } from './workout.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])],
  controllers: [WorkoutController],
  providers: [WorkoutService],
})
export class WorkoutModule {}
