import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// o primeiro argumento não é o parametro que será da rota, mas sim o que acontecerá após criar
// não deveria existir essas duas rotas
router.get('/', loginRequired, userController.index); // Lista alunos
// router.get('/:id', userController.show); // Lista usuario

router.post('/', userController.store);

router.put('/', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;

/*
nomes de metodos:
index -> lista todos os usuarios -> geralmente GET
store/create -> cria um novo usuario -> geralmente POST
show -> mostra apenas um usuario -> GET
update -> atualiza um usuario -> PUT ou PATCH
delete -> apaga um usuario -> DELETE
*/
