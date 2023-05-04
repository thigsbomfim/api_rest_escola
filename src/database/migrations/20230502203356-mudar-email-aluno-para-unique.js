export async function up(queryInterface, Sequelize) {
  // changeColumn -> altera os dados passados como primeiros argumentos, e depois no objeto,
  // coloco o que eu quero alterar
  await queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  );
}
export async function down() { }
