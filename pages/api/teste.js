import nextConnect from 'next-connect';
import multer from 'multer';

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(multer({
    storage: multer.diskStorage({
      destination: './public/receitas-thumb',
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
  }).array('thumb'))

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};