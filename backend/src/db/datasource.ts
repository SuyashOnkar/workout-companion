import { DataSource, DataSourceOptions } from 'typeorm';
import { entities } from './db.entities';
require('dotenv').config();

const database_url = process.env.DATABASE_URL;

const database_parts: string[] = database_url.split(':');
const database_parts_0: string[] = database_parts[2].split('@');
const database_parts_1: string[] = database_parts[3].split('/');
const protocol: string = database_parts[0];
const username: string = database_parts[1].slice(2);
const password: string = database_parts_0[0];
const host: string = database_parts_0[1];
const port: string = database_parts_1[0];
const pathname: string = database_parts_1[1];

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  username: username,
  password: password,
  host: host,
  port: +port,
  database: pathname,
  entities,
  synchronize: false,
  migrations: ['dist/migrations/*.js'],
  // ssl: { rejectUnauthorized: false },
};
export const dataSource = new DataSource(dataSourceOptions);
