import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


import productoRouter from './src/routes/producto.js';
import carritoRoutes from './src/routes/carrito.js';
import ordenRoutes from './src/routes/orden.js' ;
import usuarioRoutes from './src/routes/usuario.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, resp) => {
    return resp.send('Hello World');
})

app.use('/producto', productoRouter);
app.use('/carrito', carritoRoutes);
app.use('/orden', ordenRoutes);
app.use('/usuario', usuarioRoutes);

export default app;