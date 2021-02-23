import { candidate as candidateDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class CandidateDBService {
  constructor(
    @InjectModel(candidateDBModel)
    private readonly candidateModel: typeof candidateDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<candidateDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<candidateDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<candidateDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | candidateDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}
