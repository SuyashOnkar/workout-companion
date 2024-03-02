import { Template } from 'src/template/template.entity';
import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Set } from './set.entity';

@Entity('workouts')
export class Workout {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  user_id: string;

  @Column({ type: 'uuid' })
  template_id: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.workouts)
  user: User;

  @ManyToOne(() => Template, (template) => template.workouts)
  template: Template;

  @OneToMany(() => Set, (set) => set.workout)
  sets: Set[];
}
