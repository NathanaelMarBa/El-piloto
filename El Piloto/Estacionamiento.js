estacionamiento();

function estacionamiento (){
    alert("Bienvenido al estacionamiento 'El piloto'");
    var matriculas = [];
    var marcas = [];
    var contador = 1;
    var total = 0;
    

    while(contador == 1){
        let opc = prompt("Selecciona una opción" + "\n" + "1. Ingresar vehiculo" + "\n" + "2. Salida de vehiculo" + "\n" + "3. Ver estacionados" + "\n" + "4. Salir");
        if(opc == ""){
            alert("Elige una opcion por favor")
        }else{
            switch(opc){
                case "1":
                    ingresarVehiculo(matriculas, marcas);
                    total = matriculas.length;
                    break;
                case "2":
                    if(total == 0){
                        alert("No hay vehiculos estacionados")
                    }else{
                    salidaVehiculo(matriculas, marcas, total);
                    matriculas = matriculas;
                    total = matriculas.length;
                    }
                    break;
                case "3":
                    autos(matriculas, marcas, total);
                    break;
                case "4":
                    alert("Gracias por utilizar el estacionamiento el Piloto");
                    contador = 0;
             }
        }
    }
}

function ingresarVehiculo(matriculas, marcas){
    let resul = true;

    let matricula = prompt("Ingrese el numero de placa");
    
    for(let i = 0; i < matriculas.length; i++){
        if(matriculas[i] == matricula){
            alert("Esta placa ya fue ingresada, favor de verificarla");
            resul = false;
        }
    }
    
    while (resul == true){
        if(matricula == ""){
            alert("No puedes dejar campos sin llenar")
            break;
        }else{
            let marca = prompt("Ingrese la submarca");
            if(marca == ""){
                alert("No puedes dejar campos sin llenar")
            }else {
                matriculas.push(matricula.toLowerCase());
                marcas.push(marca.toLowerCase());
                matriculas = matriculas.sort();
                marcas = marcas.sort();
                alert("Vehiculo ingresado");
                console.log(matriculas);
                console.log(marcas);
                break;
            }
        }
    }
        
}

function salidaVehiculo(matriculas, marcas){
   let matricula = prompt("Ingrese la placa");
   let pago = 0;
   let cambio = 0;
    for(let i = 0; i < matriculas.length; i++){
        if(matriculas[i] == matricula.toLowerCase()){
            let horas = parseInt(prompt("Ingrese las horas"));
                    if(horas >= 0.1 && horas <= 2){
                        alert("El monto a pagar es de $40");
                        pago = parseInt(prompt("Ingrese el pago"));

                        if(pago > 40){
                            cambio = pago - 40;
                            alert("Su cambio es de: " + cambio + " pesos");
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula.toLowerCase()){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }

                        }if(pago == 40){
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula.toLowerCase()){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }

                        }if(pago < 40){
                            alert("El pago es insuficiente");
                        }
                    }    

                        if(horas >= 2.1 && horas <= 4){
                            alert("El monto a pagar es de $90");
                            pago = prompt("Ingrese el pago");

                            if(pago > 90){
                                cambio = pago - 90;
                                alert("Su cambio es de: " + cambio + " pesos");
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula.toLowerCase()){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }

                            }if(pago == 90){
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula.toLowerCase()){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }

                            }if(pago < 90){
                                alert("El pago es insuficiente")
                            }
                        }
                        
                        if(horas >= 4.1){
                            alert("El monto a pagar es de $150");
                            pago = prompt("Ingrese el pago");

                            if(pago > 150){
                            cambio = pago - 150;
                            alert("Su cambio es de: " + cambio + " pesos");
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula.toLowerCase()){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }

                            }if(pago == 150){
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula.toLowerCase()){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }

                            }if(pago < 150){
                                alert("El pago es insuficiente")
                            }
                        }
        } else if (matriculas[i] != matricula.toLowerCase()){
            alert("Matricula Incorrecta")
        } else if (matrcula = ""){
            alert("No puedes dejar campos sin llenar")
        }
            console.log(matriculas);
            console.log(marcas);
    }
}

function autos (matriculas, marcas, total){
    let opc = prompt("1. Vehiculos en el estacionamiento" + "\n" + "2. Buscar vehiculos por placa" + "\n" + "3. Buscar vehiculos por submarca");
    let cont = 0;
    switch (opc) {

        case "1":
            alert("Hay " + total + " vehiculos en el estacionamiento");
        break;
        case "2":
            if(total >0){
                let matricula = prompt("Ingrese la placa");
                for(let i = 0; i < matriculas.length; i++){
                    if(matriculas[i] == matricula.toLowerCase()){
                        cont = cont + 1;
                    }
                }

                for(let i = 0; i < matriculas.length; i++){
                    if (cont != 0){
                        if(matriculas[i] == matricula.toLowerCase()){
                            alert("Placa: " + matriculas[i] + "\n" + "Submarca: " + marcas[i] + "\n" + "Presione aceptar para siguiente");
                        }else if(matricula == ""){
                            alert("No hay vehiculos con esa placa");
                        }
                    }else if(cont == 0){
                        i = matriculas.length - 1;
                        alert("No hay vehiculos con esa placa")
                    }
                        
                }
            }else{
                alert("No hay vehiculos en el estacionamiento");
            }
        break;

        case "3":
            if(total >0){
                let marca = prompt("Ingrese la submarca");
                    for(let i = 0; i < marcas.length; i++){
                        if(marcas[i] == marca.toLowerCase()){
                            cont = cont + 1;
                        }
                    }

                    for(let i = 0; i < marcas.length; i++){
                        if (cont != 0){
                            if(marcas[i] == marca.toLowerCase()){
                                alert("Placa: " + matriculas[i] + "\n" + "Submarca: " + marcas[i] + "\n" + "Presione aceptar para siguiente");
                            }else if(marca == ""){
                                alert("No hay vehiculos con esa submarca")
                            }
                        }else if(cont == 0){
                            i = marcas.length - 1;
                            alert("No hay vehiculos con esa submarca")
                        }
                            
                    }
            }else{
                alert("No hay vehiculos en el estacionamiento");
            }
        break;
    }
}
