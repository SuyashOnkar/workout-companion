import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { Workout } from 'src/workout/workout.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @OneToMany(() => Workout, (workout) => workout.user)
  workouts: Workout[];

  static async createUser(username: string, email: string, password: string): Promise<User> {
    const user = new User();
    user.id = uuidv4();
    user.username = username;
    user.email = email;
    user.password = await this.hashPassword(password);
    console.log(this.hashPassword(password));
    console.log(user);
    return user;
  }

  private static async hashPassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }
}
