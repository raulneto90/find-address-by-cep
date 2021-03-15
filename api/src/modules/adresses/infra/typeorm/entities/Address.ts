import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('addresses')
export default class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  zip_code: string;

  @Column()
  street: string;

  @Column()
  complement: string;

  @Column()
  district: string;

  @Column()
  locale: string;

  @Column()
  state: string;

  @Column()
  ibge_number: string;

  @Column()
  gia: string;

  @Column()
  ddd: string;

  @Column()
  siafi: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
