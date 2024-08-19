let compra;
let listaAlimentos;
let tipoAlimento;
let imprimir;
let frutas = [];
let verduras = [];
let lacteos = [];
let dulces = [];


function listaCompra(){
    while(true){
    compra = prompt('¿desea realizar alguna compra? (si o no)');
        if(compra === 'no'){
            alert('Muchas gracias por preferirnos');
            break;
        }else if (compra === 'si'){
            listaAlimentos = prompt('¿qué alimento desea agregar?')
            tipoAlimento = parseInt(prompt(`¿Qué tipo de alimento es ${listaAlimentos}? Marca 1 si es "fruta", 2 si es "verdura", 3 si es "lacteo" o 4 si es "dulce"`));
            if(tipoAlimento === 1){
                frutas.push(listaAlimentos);
            }else if (tipoAlimento === 2){
                verduras.push(listaAlimentos);
            }else if (tipoAlimento === 3){
                lacteos.push(listaAlimentos);
            }else if (tipoAlimento === 4){
                dulces.push(listaAlimentos);
            }else{
                alert('debe marcar una opción adecuada')
            }
        }else{
            alert('debe marcar una opción adecuada');
        }

        imprimir = prompt('¿Desea imprimir las listas de compras? (si o no)');
        if(imprimir === 'si'){
            if(frutas.length>0){
                alert('Esta es la lista de frutas: ' + frutas.join(','));
            }if(verduras.length>0){
                alert('Esta es la lista de verduras: ' + verduras.join(','));
            }if(lacteos.length>0){
                alert('Esta es la lista de lacteos: ' + lacteos.join(','));
            }if(dulces.length>0){
                alert('Esta es la lista de dulces: ' + dulces.join(','));
            }if(frutas.length === 0 && verduras.length === 0 && lacteos.length === 0 && dulces.length === 0){
                alert('No tiene ningún tipo de alimentos registrados en ninguna lista');
            }
        }else if(imprimir === 'no'){

        }else{
            alert('debe marcar una opción');
        }

    }
}

listaCompra();