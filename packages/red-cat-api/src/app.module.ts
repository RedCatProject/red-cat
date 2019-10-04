import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApmModule } from 'nestjs-apm';
import { CandidatesModule } from './candidates/candidates.module';
import { EventsModule } from './events/events.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';

// logging service

@Module({
  imports: [
    // ApmModule.register(),
    CandidatesModule,
    EventsModule,
    VacanciesModule,
    UsersModule,
    CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
