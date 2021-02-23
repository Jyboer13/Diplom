import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class employment_type extends Model<employment_type> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;
}