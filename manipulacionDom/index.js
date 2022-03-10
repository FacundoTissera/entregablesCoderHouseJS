
let autosStock = [
    {marca: 'Ford', kilometros: 30000, anio: 2011, precio : 250000},
    {marca: 'Peugeot', kilometros: 80000, anio: 2021},
    {marca: 'Fiat', kilometros: 50000, anio: 2001},
    {marca: 'Toyota', kilometros: 130000, anio: 2008},
    {marca: 'Ford', kilometros: 10000, anio: 2012}
];
console.log(autosStock);

// let autitio = {marca: 'perro', kilometros: 33333, anio: 2045};
// autosStock.push(autitio);
// autosStock


let autos = document.getElementById('root')

let boton = document.getElementById('mostrar');

let btnAgregar = document.getElementById('btnAgregar');

// console.log(agregar.value);
// console.log(autos);

boton.addEventListener('click', ()=>{

    autosStock.forEach((producto) =>{
        console.log(producto);
        
        const printCar = document.createElement('li');
        printCar.innerText = `Marca: ${producto.marca} - Kilometros: ${producto.kilometros} - Año: ${producto.anio}`
        
        root.append(printCar)
    });
    
});


btnAgregar.addEventListener('click', agregarVehiculo);

function agregarVehiculo() {
    
    let inputMarca = document.getElementById('agregarMarca');
    let inputKm = document.getElementById('agregarKm');
    let inputAnio = document.getElementById('agregarAnio');

    if (inputMarca.value == '' && inputKm.value == '' && inputAnio.value == '') {
        
    } else {
        
        let newStock = {marca: inputMarca.value , kilometros: inputKm.value, anio: inputAnio.value}
    
        autosStock.push(newStock);
    }
    
}








