import { education as educationDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class EducationDBService {
  constructor(
    @InjectModel(educationDBModel)
    private readonly candidateModel: typeof educationDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<educationDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<educationDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<educationDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | educationDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}
