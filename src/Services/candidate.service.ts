import { Injectable, Inject } from '@nestjs/common';
import { CandidateDBService } from '../DB/Services';
import { candidate as candidateDBModel } from '../DB/TableModels';
import { v4 as uuidv1 } from 'uuid'

@Injectable()
export class CandidateService {
  private readonly candidateDBService: CandidateDBService;

  public constructor(@Inject(CandidateDBService) candidateDBService: CandidateDBService){
    this.candidateDBService = candidateDBService
  }

  public async createCandidate(body: any): Promise<Object>{
    const result: candidateDBModel = await this.candidateDBService.create({id: uuidv1(),...body})
    
    return {
      code: 200,
      id: result.id,
      result: result,
      message: 'Success!',
    } 
  }

  public async updateCandidate(body: any): Promise<Object>{
    const result: any = await this.candidateDBService.update({id: body.id}, body)
    
    return {
      code: 200,
      id: result.id,
      result: result,
      message: 'Success!',
    } 
  }
}