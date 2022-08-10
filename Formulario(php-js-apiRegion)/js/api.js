
const promises = [];
for (let i = 0 ; i <= 16; i++) {
 if (i <= 9) {
       const url = `https://apis.digital.gob.cl/dpa/regiones/0${i}`;
       promises.push(fetch(url).then(res => res.json()));
 }if (i > 9) {
     const url = `https://apis.digital.gob.cl/dpa/regiones/${i}`;
     promises.push(fetch(url).then(res => res.json()));
 }

console.log(promises[i])
}

Promise.all(promises).then(results => {
 //MODIFICAMOS LA LISTA CON MAP AÑADEMOS FORMATO
 const regionees = results.map(data => ({
   codigo: data.codigo,
   nombre: data.nombre,
 }));
 console.log(regionees);
 sendData(regionees);
});

function sendData(jsonData) {
 //RECORREMOS Y AÑADEMOS A LA TABLA HTML
for (let i = 1; i < jsonData.length; i++) {
   const regiones = [];
   const nmbre = []
   regiones.push(jsonData[i].nombre)
   nmbre.push(jsonData[i].codigo)
   regiones.sort();
   addOptions("provincia", regiones, nmbre)
}
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array, codigoo) {
 var select = document.getElementsByName(domElement)[0];
 for (value in array) {
 for (val in codigoo) {
  var option = document.createElement("option");
  option.text = array[value];
  option.id = codigoo[val];
  option.value = codigoo[val];
  select.add(option);
 }} 
console.log(document.getElementById("15"))
}

//Agregar comuna segun region

function changeFunc(el) {
 let cod = el
 const api = `https://apis.digital.gob.cl/dpa/regiones/${el}/comunas`;
 var list = document.getElementsByClassName("deletea");
 for(var i = list.length - 1; 0 <= i; i--)
 if(list[i] && list[i].parentElement)
 list[i].parentElement.removeChild(list[i]);

(async function(){
 const res = await fetch(api).then(res => res.json());

Promise.all(res).then(results => {
 //MODIFICAMOS LA LISTA CON MAP AÑADEMOS FORMATO
 const comunass = results.map(data => ({
   nombre: data.nombre,
 }));
console.log(comunass)   
//addOptionsC("comunaa", comunass) 
sendComuna(comunass)
});
})();
 }

function sendComuna(datos){
 for (let i = 0; i < datos.length; i++) {
     const comuna = [];
     comuna.push(datos[i].nombre)
     comuna.sort();
     addOptionsC("comunaa", comuna)
 }
     
}

// Rutina para agregar opciones a un <select>
function addOptionsC(domElement, array) {
var select = document.getElementsByName(domElement)[0];
console.log(array)
for (value in array) {
 let comun = array[value]
var option = document.createElement("option");
option.text = comun;
option.className = "deletea";
select.add(option);
} 
}


document.getElementById('formulario').addEventListener('submit', function(e) { 

    e.preventDefault();

    let formulario = new FormData(document.getElementById('formulario'));




    
    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true'){
            document.getElementById('txt_nombre').value = '';
            document.getElementById('txt_apellido').value = '';
            document.getElementById('provincia').value = '';
            document.getElementById('comunaa').value = '';
            document.getElementById('txt_direccion').value = '';
            document.getElementById('txt_correo').value = '';
            alert('el usuario se inserto correctamente')
        }else {
            console.log(data);
        }
    })
});