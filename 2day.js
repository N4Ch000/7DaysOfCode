let nombre; 
let edad;
let lenguaje; 
let estudio;

function datosPersonales(){
    nombre = prompt('¿Cuál es tu nombre?');
    while (true){
        edad = prompt('¿cuántos años tienes?');
        if (!isNaN(edad)){
            edad = parseInt(edad,10);
            break;
        }else{
            alert('la edad debe ser numérica')
        }
    }
    lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?')

}

datosPersonales();
alert(`Hola ${nombre}, tienes ${edad} y estás aprendiendo ${lenguaje}`)

function estudios(){
    while(true){
        estudio = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}?. Responde con el número 1 para SÍ o 2 para N0.`))
        if(estudio === 1){
            alert('¡Muy bien! Sigue estudiando y tendrás mucho exito')
            break;
        }else if(estudio === 2){
            alert('Oh,que pena...¿Ya intentaste aprender otros lenguajes?')
            break;
        }else{
            alert('Recuerda que denes responder solo con un 1 o un 2')
        }
    };

}
estudios();
console.log(nombre);
console.log(edad);
console.log(lenguaje);