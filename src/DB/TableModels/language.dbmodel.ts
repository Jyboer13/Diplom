import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class language extends Model<language> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;
}