let area;
let aprender;
let eleccion;
let aceptacion;
let lista;
let tecnologias = [];

function eleccionArea(){
    while(true){
        area = prompt('¿En qué área estás interesad@ (Front-End o Back-End)?');

        if(area =='Back-End'){
            aprender = prompt('Te gustaría aprender "C#" o "Java"');
            if(aprender == 'C#'){
                alert ('Interesante, así que te gustaría aprender "C#"');
                break;
            }else if(aprender == "Java"){
                alert ('Aprender "Java", ¡suena genial!');
                break;
            }else
             alert('Debes elegir una opción válida');
    

        }else if(area == 'Front-End'){
            aprender = prompt('Te gustaría aprender "React" o "Vue"')
            if(aprender == "React"){
                alert('Me parece muy bien que quieras aprender "React"');
                break;
            }else if(aprender == "Vue"){
                alert('Vue es una gran herramienta!');
                break;
            }else
            alert('Debes elegir una opción válida');

        }else
        alert('Debes elegir una opción válida');

    }   
}

eleccionArea();
console.log(area);
console.log(aprender);

function eleccionFuturo(){
    while(true){
        eleccion = prompt('Te gustaría seguir especializandote en el área elegida, anteriomente o Te gustaría desarrollar para convertirte en Fullstack (Area o Fullstack)');
        if(eleccion == 'Area'){
            alert('Sigue así y llegaras muy lejos como especialista en el área');
            break;
        }else if(eleccion == 'Fullstack'){
            alert('Muy bien, serás un gran desarollador Fullstack')  
        }else
        alert('Debes elegir una opción valida');
    }

}
eleccionFuturo();
console.log(eleccion);

function eleccionTecnologias(){
    aceptacion = prompt('¿Te gustaría especializarte en algunas técnologías?(Si o No');
    if( aceptacion == 'No'){
        alert('Muchas gracias por participar');
    }else if(aceptacion == 'Si'){
        while(true){
            lista = prompt('¿Qué tecnologías te gustaria aprender?(Si ya no tienes más tecnologías que aprender, escribe: salir)');
            if(lista == 'salir'){
                break;
            }
            tecnologias.push(lista);
            
            }
        }
        if(tecnologias.length>0){
            alert('Has elegido las siguientes tecnologías: ');
            for(let i = 0; i<tecnologias.length;i++){
                alert(tecnologias[i]);
            }

        }
        
}

eleccionTecnologias();
console.log(aceptacion);
console.log(tecnologias);