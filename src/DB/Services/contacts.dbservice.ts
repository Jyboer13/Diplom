import { contacts as contactsDBModel } from "../TableModels";
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from "sequelize/types";

@Injectable()
export class ContactsDBService {
  constructor(
    @InjectModel(contactsDBModel)
    private readonly candidateModel: typeof contactsDBModel
  ) {}

  public async findAll(where?: WhereOptions): Promise<contactsDBModel[]> {
    return this.candidateModel.findAll( { where } );
  }

  public async findOne(where: WhereOptions): Promise<contactsDBModel> {
    return this.candidateModel.findOne( { where } );
  }

  public async create(data: any): Promise<contactsDBModel>{
    return this.candidateModel.create(data)
  }

  public async update(where: WhereOptions, data: any): Promise<Array<number | contactsDBModel[]>>{
    return this.candidateModel.update(data, { where })
  }

  public async delete(where: WhereOptions): Promise<number>{
    return this.candidateModel.destroy(where ? { where } : { truncate: true })
  }
}
