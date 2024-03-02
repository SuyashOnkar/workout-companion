import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ExerciseModule } from './exercise/exercise.module';
import { TemplateModule } from './template/template.module';
import { WorkoutController } from './workout/workout.controller';
import { WorkoutService } from './workout/workout.service';
import { WorkoutModule } from './workout/workout.module';

@Module({
  imports: [DbModule, UserModule, AuthModule, ExerciseModule, TemplateModule, WorkoutModule],
  controllers: [AppController, WorkoutController],
  providers: [AppService, WorkoutService],
})
export class AppModule {}
