import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CandidatesService } from './candidates.service';
import { Candidate } from './candidate.entity';

@Crud({
    model: {
        type: Candidate,
    },
})
@Controller('candidates')
export class CandidatesController {
    constructor(public service: CandidatesService) { }
}
