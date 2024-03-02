import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Template } from './template.entity';
import { Exercise } from 'src/exercise/exercise.entity';

@Entity('templates_exercises')
export class TemplateExercise {
  @PrimaryColumn()
  template_id: string;

  @PrimaryColumn()
  exercise_id: string;

  @ManyToOne(() => Template, (template) => template.templateExercises)
  @JoinColumn({ name: 'template_id' })
  template: Template;

  @ManyToOne(() => Exercise)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;
}
