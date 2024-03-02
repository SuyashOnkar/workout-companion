import { Exercise } from 'src/exercise/exercise.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Workout } from './workout.entity';

@Entity('sets')
export class Set {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  workout_id: string;

  @Column({ type: 'uuid' })
  exercise_id: string;

  @Column({ type: 'int' })
  reps: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  weight: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => Workout, (workout) => workout.sets)
  workout: Workout;

  @ManyToOne(() => Exercise, (exercise) => exercise.sets)
  exercise: Exercise;
}
