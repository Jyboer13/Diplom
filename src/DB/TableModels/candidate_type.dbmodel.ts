import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class candidate_type extends Model<candidate_type> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;
}