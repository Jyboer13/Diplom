import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class direction extends Model<direction> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;

  @Column({ type: DataType.STRING })
  public description: string;
}