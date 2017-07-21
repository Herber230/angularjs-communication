var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


var port = 3001;

var personas =
    [
        { id: 1, nombre: "Juan", apellido: "Rodriguez", edad: 20 },
        { id: 2, nombre: "Mario", apellido: "Martinez", edad: 18 },
        { id: 3, nombre: "Rodrigo", apellido: "Alvarado", edad: 22 }
    ];

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  next();
});

app.get('/api/persona', function (req, res) {
    res.json(personas);
});

app.post('/api/persona', function (req, res) {

    var nuevaPersona = req.body;

    personas.sort((a, b) => {
        if (a.id < b.id)
            return -1;
        if (a.id > b.id)
            return 1;
        return 0;
    })

    var nuevoId = personas[personas.length-1].id + 1;
    nuevaPersona.id = nuevoId;
    personas.push(nuevaPersona);    

    res.json(nuevaPersona);
});


app.listen(port);
console.log("App listening on port " + port);