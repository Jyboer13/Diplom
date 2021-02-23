import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class experience extends Model<experience> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;

  @Column({ type: DataType.STRING })
  public start: string;

  @Column({ type: DataType.STRING })
  public finish: string;
}