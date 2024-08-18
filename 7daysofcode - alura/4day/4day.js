let numeroDefinido = 5;
let numeroMaximo = 10;
let numeroRandom = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;

function numeroEstatico(){

    while(numeroUsuario != numeroDefinido){
        numeroUsuario = parseInt(prompt('Me indicas un número del 1 al 10: '));
        if(numeroUsuario == numeroDefinido){
            alert(`Acertaste, el numero secreto es: ${numeroDefinido}. Lo lograste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
            intentos = 1;
        }else{
            intentos ++;
            if(intentos > maximoIntentos){
                alert( `Llegaste al máximo número de ${maximoIntentos} intentos. El número secreto es el : ${numeroDefinido}`);
                intentos = 1;
                break;
            }
        }
    }
};

numeroEstatico();

function numeroDinamico (){

    while(numeroUsuario != numeroRandom){
        numeroUsuario = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaximo} : `));
        if(numeroUsuario == numeroRandom){
            alert(`Acertaste, el número secrete es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
        }else{
            intentos ++;
            if (intentos > maximoIntentos){
                alert(`llegaste al máximo número de intentos ${maximoIntentos} intentos. El número secreto es el : ${numeroRandom}` );
                break;
            }
        }

    }

};

numeroDinamico();