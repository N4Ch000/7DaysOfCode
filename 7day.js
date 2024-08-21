let operacionSeleccionada;
let operadorSelecionado;
let primerNumero;
let segundoNumero;
let resultado;

function operador(){
    while(true){
        operacionSeleccionada = prompt('Selecione la operación que desea realizar: 1 - suma. 2 - resta. 3 - multiplicación. 4 - division. 5 - salir.')
        switch(operacionSeleccionada){
            case "1":
                operadorSelecionado = '+';
                break;
            case "2":
                operadorSelecionado = '-';
                break;
            case "3":
                operadorSelecionado = '*';
                break;
            case "4":
                operadorSelecionado = '/';
                break;
            case "5":
                alert('Hasta la próxima');
                return;
            default:
                alert('Opción no válida, por favor intente de nuevo.');
                continue;
        }
        break;
    }
}
function numeroUno(){
    while(true){
        primerNumero = parseInt(prompt('Ingrese el primer número o numerador'));
        if (isNaN(primerNumero)){
            alert('solo debe digitar números');
        }else{
            break;
        }
    }
}
function numeroDos(){
    while(true){
    segundoNumero = parseInt(prompt('Ingrese el segundo número o denominador'));
    if(isNaN(segundoNumero)){
        alert('solo debe digitar números');
    }else{
        break;
        }
    }
}

function resultadoOperacion(){
   switch(operadorSelecionado){
    case '+':
        resultado = primerNumero + segundoNumero;
        break;
    case '-':
        resultado = primerNumero - segundoNumero;
        break;
    case '*':
        resultado = primerNumero * segundoNumero;
        break;
    case '/':
        resultado = primerNumero / segundoNumero;
        break;
   }
   alert(`El resultado de la operación: ${primerNumero}${operadorSelecionado}${segundoNumero} es: ${resultado}`)
}

operador();
if(operacionSeleccionada !== '5'){
    numeroUno();
    numeroDos();
    resultadoOperacion();
}