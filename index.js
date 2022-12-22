const express = require("express");
const exphbs = require("express-handlebars");

const path=require("path");

const router = require("./Routes/products");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views2'));
app.engine('.hbs', exphbs.engine({
  layoutsDir: app.get('views')+ '/layouts',
  partialsDir: app.get('views')+ '/partials',
  extname: '.hbs'
}))
//app.set('view engine', 'hbs');
app.set('view engine', 'pug');

app.get("/", (req, res) => {
  const context={
    title: "Producto",
    price: "Precio",
    thumbnail:"imagen",
}
 
res.render("index", context);
});

app.use('/api', router)

app.use(express.static('public'))


const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Listening on port: ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`An error ocurred on the server ${error.message}`);
});

