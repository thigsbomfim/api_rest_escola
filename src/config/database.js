require('dotenv').config();

export const dialect = 'mysql';
export const host = process.env.DATABASE_HOST;
export const port = process.env.DATABASE_PORT;
export const username = process.env.DATABASE_USERNAME;
export const password = process.env.DATABASE_PASSWORD;
export const database = process.env.DATABASE;
export const define = {
  timestamps: true,
  underscored: true,
  underscoredAll: true,
  'createdAt': 'created_at',
  'updatedAt': 'updated_at',
};
export const dialectOptions = {
  timezone: 'America/Sao_Paulo',
};
export const timezone = 'America/Sao_Paulo';
