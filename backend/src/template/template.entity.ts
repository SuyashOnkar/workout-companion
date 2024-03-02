import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TemplateExercise } from './template-exercise.entity';
import { Workout } from 'src/workout/workout.entity';

@Entity('templatesd')
export class Template {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => TemplateExercise, (templateExercise) => templateExercise.template)
  templateExercises: TemplateExercise[];

  @OneToMany(() => Workout, (workout) => workout.template)
  workouts: Workout[];
}
