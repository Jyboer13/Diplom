import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class vacancy extends Model<vacancy> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;

  @Column({ type: DataType.STRING })
  public description: string;

  @Column({ type: DataType.STRING })
  public direction_id: string;

  @Column({ type: DataType.STRING })
  public number: string;

  @Column({ type: DataType.STRING })
  public salary: string;

  @Column({ type: DataType.STRING })
  public skills_id: string;

  @Column({ type: DataType.STRING })
  public candidate_type_id: string;

  @Column({ type: DataType.STRING })
  public manager_id: string;
}