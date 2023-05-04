import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Foto from '../models/Foto';

// cria um multer com as configurações que estão dentro do config e diz que passará apenas 1 img
// como name 'foto' do multipart
const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    // primeiro argumento é o req da requisição, segundo é o res, terceiro é o erro que, se for
    // gerado, irá retornar o error.code
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error],
        });
      }

      try {
        const { originalname, filename } = req.file;
        console.log(req.file);
        const { aluno_id } = req.body;
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
