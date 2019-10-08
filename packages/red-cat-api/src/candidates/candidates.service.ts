import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Candidate } from './candidate.entity';

@Injectable()
export class CandidatesService extends TypeOrmCrudService<Candidate> {
    constructor(@InjectRepository(Candidate) repo) {
        super(repo);
    }
}