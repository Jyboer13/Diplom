import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class manager extends Model<manager> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;

  @Column({ type: DataType.STRING })
  public email: string;

  @Column({ type: DataType.STRING })
  public phone: string;
}