const express = require("express");
const exphbs = require("express-handlebars");

const path=require("path");

const router = require("./Routes/products");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Handlebars
//app.set('views', path.join(__dirname, 'views'));
// app.engine('.hbs', exphbs.engine({
//   layoutsDir: app.get('views')+ '/layouts',
//   partialsDir: app.get('views')+ '/partials',
//   extname: '.hbs'
// }))

//Pug
//app.set('views', path.join(__dirname, 'views2'));

//Ejs
app.set('views', path.join(__dirname, 'views3'));


//app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

let allProducts=[{}];

app.get("/", (req, res) => {
  const context={
    title: "Producto",
    price: "Precio",
    thumbnail:"imagen",
    allProducts,
    printProducts:false
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

