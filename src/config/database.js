require('dotenv').config();

module.exports = {
  dialect: 'postgres',
  url: process.env.DATABASE_URL,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // para lidar com certificados autoassinados ou inválidos
    },
  },
};
