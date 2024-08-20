let compra;
let borrar;
let salir;
let listaAlimentos;
let tipoAlimento;
let imprimir;
let eleccionLista;
let eleccionProducto;
let producto;
let frutas = [];
let verduras = [];
let lacteos = [];
let dulces = [];


function listaCompra(){
    while(true){
    compra = prompt('¿desea realizar alguna compra? (si o no)');
        if(compra === 'si'){
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
            }else if(compra === 'no'){
                borrar = prompt('¿Desea borrar algún producto de la lista? (si o no)');
                if(borrar === 'no'){
                    salir = prompt('¿Desea salir del programa actual? (si o no)');
                    if (salir === 'si'){
                        alert('Muchas gracias por preferirnos');
                        break;
                    }
                }else if(borrar === 'si'){
                    eleccionLista = parseInt(prompt('Que lista desea explorar: 1 - frutas, 2 - verduras, 3 - lacteos, 4 - dulces'));
                    if(eleccionLista === 1){
                        eleccionProducto= prompt(`Esta es la lista de frutas:  ${frutas.join(',')}. Elija el producto que desea eliminar: `)
                        producto = frutas.indexOf(eleccionProducto);
                            if(producto !== -1){
                                frutas.splice(producto,1);
                                alert(`El producto ${eleccionProducto} ha sido eliminado. La nueva lista es: ${frutas.join(',')}`);
                            }else{
                                alert('El producto no se encontró en la lista');
                            }
                    } else if(eleccionLista === 2){
                        eleccionProducto= prompt(`Esta es la lista de verduras: ${verduras.join(',')}. Elija el producto que desea eliminar:  `)
                        producto = verduras.indexOf(eleccionProducto);
                            if(producto !== -1){
                                verduras.splice(producto,1);
                                alert(`El producto ${eleccionProducto} ha sido eliminado. La nueva lista es: ${verduras.join(',')}`);
                            }else{
                                alert('El producto no se encontró en la lista');
                            }
                    } else if(eleccionLista === 3){
                        eleccionProducto = prompt(`Esta es la lista lacteos: ${lacteos.join(',')}. Elija el producto que desea eliminar: `)
                        producto = lacteos.indexOf(eleccionProducto);
                            if(producto !== -1){
                                lacteos.splice(producto,1);
                                alert(`El producto ${eleccionProducto} ha sido eliminado. La nueva lista es: ${lacteos.join(',')}`);
                            }else{
                                alert('El producto no se econtró en la lista');
                            }
                    }else if(eleccionLista === 4){
                        eleccionProducto = prompt(`Esta es la lista de dulces: ${dulces.join(',')}. Elija el producto que desea eliminar: `)
                        producto = dulces.indexOf(eleccionProducto);
                            if(producto !== -1){
                                dulces.splice(producto,1);
                                alert(`El producto ${eleccionProducto} ha sido eliminado. La nueva lista es: ${dulces.join(',')}`);
                            }else{
                                alert('El producto no se encontró en la lista');
                            }
                    }else{
                        alert('Debe seleccionar una opción válida');
                    }

                }else{
                    alert('Debe seleccionar una opción válida');
                }

            }else{
                alert('Debe seleccionar una opción válida');
            }      
        }
    }
listaCompra();