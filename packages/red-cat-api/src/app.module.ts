import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApmModule } from 'nestjs-apm';
import { CandidatesModule } from './candidates/candidates.module';
import { EventsModule } from './events/events.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidates.ServiceService } from './candidates.service/candidates.service.service';


// logging service

@Module({
  imports: [
    // ApmModule.register(),
    CandidatesModule,
    EventsModule,
    VacanciesModule,
    UsersModule,
    CompaniesModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, Candidates.ServiceService],
})
export class AppModule {}
