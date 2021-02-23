import { experience as experienceDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class ExperienceDBService {
  constructor(
    @InjectModel(experienceDBModel)
    private readonly candidateModel: typeof experienceDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<experienceDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<experienceDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<experienceDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | experienceDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}
