import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class response_types extends Model<response_types> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;
}