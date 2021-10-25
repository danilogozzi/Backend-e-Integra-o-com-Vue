var express = require("express")
var app = express()
var router = require("./routes/routes")
var cors = require("cors") 

app.use(cors())

app.use("/",router);

app.listen(8686,() => {
    console.log("Servidor rodando")
});
