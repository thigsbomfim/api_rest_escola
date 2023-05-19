import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
const destinationPath = '/opt/render/project/dist/uploads/images';

// salva imagem dentro do servidor
export default {
  fileFilter: (req, file, cb) => {
    // verifica se é um arquivo jpg ou png
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser png ou jpg'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    // caminho onde irá ser salvo os arquivos
    destination: (req, file, cb) => {
      // primeiro argumento é o erro
      // segundo argumento é o caminho onde eu vou jogar os arquivos
      cb(null, destinationPath);
    },
    // da um nome ao arquivo que será salvo
    filename: (req, file, cb) => {
      // primeiro argumento é o erro
      // segundo argumento é
      // extname -> extrai apenas a extensão do arquivo que será enviado, ex.: .jpg
      // file.originalname -> é o nome original do arquivo
      // o nome será a data atual, e a extensão do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
