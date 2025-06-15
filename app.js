import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* const myLogger = (req, res, next) => {
  console.log('middleware log');
  next(); // bir sonraki middleware geçmeyi sağlar. get isteği de bir middleware sayılır. 
  // req ile res arasında olan her şey middleware sayılır.
}; */

// middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3003;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
