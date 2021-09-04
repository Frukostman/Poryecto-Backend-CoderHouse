const app = require('./server')
const config = require('./config/config.json');
const dotenv = require('dotenv');

// obtengo la config del .env
dotenv.config();

// obtengo el puerto del enviroment o lo seteo por defecto
const PORT = process.env.PORT || config.PORT;

// protejo el servidor ante cualquier excepcion no atrapada
app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

// pongo a escuchar el servidor en el puerto indicado
const server = app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
