import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class candidate extends Model<candidate> {
  @Column({ primaryKey: true, type: DataType.STRING })
  public id: string;

  @Column({ type: DataType.STRING })
  public name: string;

  @Column({ type: DataType.STRING })
  public about: string;

  @Column({ type: DataType.STRING })
  public place_of_residence: string;

  @Column({ type: DataType.STRING })
  public citizenship: string;

  @Column({ type: DataType.STRING })
  public willingness_to_travel: string;

  @Column({ type: DataType.STRING })
  public willing_to_relocate: string;

  @Column({ type: DataType.STRING })
  public vacancy_id: string;

  @Column({ type: DataType.STRING })
  public salary: string;

  @Column({ type: DataType.STRING })
  public status_id: string;

  @Column({ type: DataType.STRING })
  public employment_type_id: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  public experience_id: Array<string>;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  public education_id: Array<string>;

  @Column({ type: DataType.ARRAY(DataType.STRING)})
  public languages_id: Array<string>;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  public skills_id: Array<string>;

  @Column({ type: DataType.STRING })
  public response_type_id: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  public contacts_id: Array<string>;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  public project_links: Array<string>;

  @Column({ type: DataType.STRING })
  public manager_id: string;
}