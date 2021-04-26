import { Controller, Inject, Body, Post, Put } from "@nestjs/common";
import { CandidateService } from '../Services';

@Controller('/candidate')
export class CandidateController {
  private readonly candidateService: CandidateService;

  public constructor(@Inject(CandidateService) candidateService: CandidateService) {
    this.candidateService = candidateService
  }

  @Post('/')
  public async create(@Body() body: any): Promise<Object> {
    return this.candidateService.createCandidate(body);
  }

  @Put('/')
  public async update(@Body() body: any): Promise<Object> {
    return this.candidateService.updateCandidate(body);
  }
}
