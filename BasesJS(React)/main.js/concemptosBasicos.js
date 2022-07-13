
// 1. Template Literals
const firstName = 'Alejandro';
const secondName = 'Fernandez'

// Old School
console.log(firstName + " " + secondName);

// * New School
console.log(`${firstName} ${secondName}`);

// Ejemplo de uso en React
// function Componente({ props }) {
//     return (<div class={`bg-color-${props}`}>Hola</div>)
// }

// 2. Shorthand property names


const nombre = 'MAria';
const twiter = '@Mbenitez';
const edad = 31;
// Old School
const persona = {
    nombre: nombre,
    twiter: twiter,
    edad: edad
}
// * New School
const persona1 = {
    nombre,
    twiter,
    edad
}

console.log(persona);
console.log(persona1);

// Ejemplo de uso en React
// function Componente({ props1, props2 }) {
//     const [state, setState] = useState({ props1, props2 });
// }

// 3. Arrow Functions

// Old School
function nombreFuncion() {
    return 'Hola Old Scholl';
}

// * New School (Varias Lineas)
const funcionFlecha = () => {
    return 'Hola New Scholl Flecha'
}

// * New School (Una Linea)
const funcionFlecha1 = () => 'Hola New School Flecha simple'


console.log(nombreFuncion());
console.log(funcionFlecha());
console.log(funcionFlecha1());

// Ejemplo en React
// function ListaTareas(){
//     return(
//         <ul>
//             {listado.map(elemento => (<li>{elemento.nombre}</li>))}
//         </ul>
//     );
// }

// 4. Destructuring
const cuadrado = {
    x: 10,
    y: 7,
}

// Old School
function calcularArea(cuadrado) {
    return cuadrado.x * cuadrado.y;
}

console.log(calcularArea(cuadrado));

// New School
function calcularArea(cuadrado) {
    const { x, y } = cuadrado;
    return x * y;
}

console.log(calcularArea(cuadrado));

// * New School (Destructuring)
function calcularArea({ x, y }) {
    return x * y;
}

console.log(calcularArea(cuadrado));

// Ejemplo en React
// function Avatar({ username, url }) {
//     return <img src={url} alt={username} />
// }

// 5. Default Parameters
// Old School
function suma(a, b) {
    if (a === undefined || b === undefined) {
        console.log('Debes introducir 2 valores');
        return;
    }
    return a + b;
}

console.log(suma(3, 4));

// * New School (Solucionamos el Problema de una manera mas simple)
function suma(a = 0, b = 0) {
    return a + b;
}

console.log(suma(3, 4));

// 6. Spread Operator / Rest Parameters
// 6.1 Ejemplo con Arrays
const array = [1, 2, 3, 4, 5];
const otroArray = [6, 7, 8, 9, 10];

// Old School (Ejemplo Array)
const nuevoArray = array.concat(otroArray);
console.log(nuevoArray);

// * New School (Ejemplo Array)
const nuevoArray1 = [...array, ...otroArray];
console.log(nuevoArray1);

// 6.2 Ejemplo con Objetos
const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const obj2 = {
    d: 'd',
    e: 'e',
}

// Old School
const nuevoObjeto = Object.assign({}, obj1, obj2);
console.log(nuevoObjeto);

// * New School
const nuevoObjeto1 = { ...obj1, ...obj2 };
console.log(nuevoObjeto1);

// Ejemplo en React
// function Components({ id, ...props }) {
// return <NuevoComponente key={id}, {...props} />
// }

// 7. ESModules

// export function suma(a,b){
//     ...
// }
// export function otraFuncion(){
//     ...
// -----

// export function resta(a,b){
//     ...
// }
// -----

// import { suma, otraFuncion } from './suma';
// import resta from './resta';

// function calculadora(){
//     suma();
//     resta();
// }

// 8. Ternary Operator

const coche = {
    marca: 'Tesla',
    modelo: 'CyberTruck'
}

// Old School
// let modelo;
// if (coche.modelo) {
//     modelo = coche.modelo;
// } else {
//     modelo = 'X';
// }

// console.log(modelo);

// * New School
let modelo = coche.modelo ? coche.modelo : 'X';

console.log(modelo);

// 9. Array Methods

// Metodos
// -- find
// -- some
// -- every
// -- includes
// -- map
// -- filter
// -- reduce

