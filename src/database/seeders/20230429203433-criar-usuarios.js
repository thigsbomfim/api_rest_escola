const bcryptjs = require('bcryptjs');

export async function up(queryInterface) {
  await queryInterface.bulkInsert(
    'users',
    [
      {
        nome: '',
        email: '@.com',
        password_hash: await bcryptjs.hash('', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  );
}
export async function down() {}
