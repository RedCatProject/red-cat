import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Candidate } from './candidate.entity';
import { CandidatesService } from './candidates.service';
import { CandidatesController } from './candidates.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Candidate])],
    providers: [CandidatesService],
    controllers: [CandidatesController],
})
export class CandidatesModule {}
