//Requerimos express, quien se encarga de ejecutar el servidor web
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const path    = require('path');
const publicPath = path.resolve(__dirname, './public');
const app = express();

//Requerimos las rutas
const rutasIndex = require('./routes/index');
const rutasProductos = require('./routes/products');
const rutasUsuarios = require('./routes/usuarios');
const methodOverride = require('method-override');
app.use(cors({
    origin: "*"
}));
//Configuracion para realizar POST
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
//Establecemos el template engine a EJS
app.set('view engine', 'ejs');
app.set('views', ['./views/index/', './views/products/', './views/users/']);
//Definimos la ubicacion de los recursos estaticos
app.use(methodOverride('_method'));
app.use(express.static(publicPath));

app.use('/', rutasIndex);
app.use('/productos', rutasProductos);
app.use('/usuarios', rutasUsuarios);


app.listen(process.env.PORT || 3030, () => {
    console.log('Corriendo en el puerto 3030');
});