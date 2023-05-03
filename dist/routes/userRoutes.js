"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// o primeiro argumento não é o parametro que será da rota, mas sim o que acontecerá após criar
// não deveria existir essas duas rotas
router.get('/', _loginRequired2.default, _UserController2.default.index); // Lista alunos
// router.get('/:id', userController.show); // Lista usuario

router.post('/', _loginRequired2.default, _UserController2.default.store);

router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/:id', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
nomes de metodos:
index -> lista todos os usuarios -> geralmente GET
store/create -> cria um novo usuario -> geralmente POST
show -> mostra apenas um usuario -> GET
update -> atualiza um usuario -> PUT ou PATCH
delete -> apaga um usuario -> DELETE
*/
