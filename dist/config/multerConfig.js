"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// salva imagem dentro do servidor
exports. default = {
  fileFilter: (req, file, cb) => {
    // verifica se é um arquivo jpg ou png
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser png ou jpg'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    // caminho onde irá ser salvo os arquivos

    destination: (req, file, cb) => {
      // primeiro argumento é o erro
      // segundo argumento é o caminho onde eu vou jogar os arquivos
      cb(null, _path.resolve.call(void 0, __dirname, '..', 'uploads', 'images'));
    },
    // da um nome ao arquivo que será salvo
    filename: (req, file, cb) => {
      // primeiro argumento é o erro
      // segundo argumento é
      // extname -> extrai apenas a extensão do arquivo que será enviado, ex.: .jpg
      // file.originalname -> é o nome original do arquivo
      // o nome será a data atual, e a extensão do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
