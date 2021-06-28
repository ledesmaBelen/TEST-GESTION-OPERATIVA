

const axios = require('axios');
const { start } = require('repl');
//PARA VARIOS USERS DEFINO UN ARRAY DE USERS,
// EN ESTE CASO SOLO SERA EL USERS 179571326- SITE MLA
//SI SE DESEA INGRESAR MAS USERS SE DEBE CREAR OTRA VARIABLE LLAMADA USERN 
//(N SIENDO EL NUMERO DE USER) CON SU ID Y SITIO RESPECTIVO
let user = {id :"179571326",
            site: "MLA"};
let users = [];
users.push(user);
//DEFINO UN ARRAY PARA SETEAR TODAS LAS URLS EN CASO DE QUE SE PASEN MAS DE UN USER
let urls = [];

const header = {Authorization : "APP_USR-12345678-031820-X-12345678"};

users.forEach(user =>{
    let url = "https://api.mercadolibre.com/sites/"+ user.site + "/search?seller_id=" + user.id ;
    urls.push(url);
    
});
//DEFINO LAS VARIABLES A UTILIZAR PARA MANEJAR LOS DATOS
var final =[];
var data = [];
var categoryIds= [];

//REALIZO UNA PETICION GET POR CADA USER 
urls.forEach(url => {
    axios.get(url,{
    params: {
        Authorization : "APP_USR-12345678-031820-X-12345678"
    }
})
.then(resp => {
data = resp.data.results;

data.forEach(product => {
    var obj = {
        id: "",
        title: "",
        categoryId: "",
        name:""
    };
    obj["id"] = product.id;
    obj["title"] =product.title;
    obj["categoryId"] = product.category_id;
    final.push(obj);
    var url = "https://api.mercadolibre.com/categories/" + product.category_id;
    categoryIds.push(url);
});

})
.catch(err => console.log(err));

var contador = 0;
setTimeout(function(){
    console.log(final);
    categoryIds.forEach(url => {
    axios.get(url,{
        params:{
            Authorization: "APP_USR-12345678-031820-X-12345678"
        }
    })
    .then(resp =>{
        
        final[contador].name = resp.data.name;
        contador++;
    })
    .catch(error => console.log(error));
    });

    
},3000);
})
//DEFINO LA VARIABLE FINAL
var datosFinales = [];
datosFinales.push(final);
//SE CREA EL ARCHIVO TXT .LOG CON UN MENSAJE DE FINALIZACION
setTimeout(function(){
    var fs = require('fs');

    var stream = fs.createWriteStream("datos.txt");
    stream.once('open', function(fd) {
        stream.write(".LOG\n");
    datosFinales[0].forEach(dato =>{
        stream.write(dato.id);
        stream.write(dato.title);
        stream.write(dato.categoryId);
        stream.write(dato.name + "\n");
        
    })
    
    stream.end();
    });
    console.log("El archivo fue creado con exito");
},5000)
