import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class status extends Model<status> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;
}