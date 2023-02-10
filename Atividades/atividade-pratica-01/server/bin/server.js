import os from 'os';
import app from "../src/router.js"

// Rotas -- express.js

// Iniciar o servidor:
console.log(`Servername: ${os.hostname()}`);

const freememory = os.freemem() / (1024 * 1024 * 1024);
const total = os.totalmem() / (1024 * 1024 * 1024);

console.log(`Memoria livre: ${freememory} GB`);
console.log(`Memoria total: ${total} GB`);



app.listen(3000, () => {
    console.log(`Server rodando...`);
});