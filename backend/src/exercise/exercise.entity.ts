import { Set } from 'src/workout/set.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  description_url: string;

  @Column({ length: 255 })
  image_url: string;

  @Column({ length: 255 })
  image_url_1: string;

  @Column({ length: 20 })
  muscle_group: string;

  @Column({ length: 255 })
  equipment_details_url: string;

  @Column({ length: 255 })
  equipment: string;

  @Column('decimal', { precision: 3, scale: 1 })
  rating: number;

  @OneToMany(() => Set, (set) => set.exercise)
  sets: Set[];
}
