estacionamiento();

function estacionamiento (){
    alert("Bienvenido al estacionamiento")
    var matriculas = [];
    var marcas = [];
    var suma = 0;
    let contador = 1;

    while(contador == 1){
        let opc = prompt("Que de deseas hacer?" + "\n" + "1. Ingresar vehiculo" + "\n" + "2. Salida de vehiculo" + "\n" + "3. Ver estacionados" + "\n" + "4. Salir");
        switch(opc){
            case "1":
                ingresarVehiculo(matriculas, marcas);
                suma = suma + 1;
                break;
            case "2":
                salidaVehiculo(matriculas, marcas, suma);
                break;
            case "3":
                autos(matriculas, marcas, suma);
                break;
            case "4":
                contador = 0;
         }
    }
}

function ingresarVehiculo(matriculas, marcas){
    let matricula = prompt("Ingrese la matricula");
    let marca = prompt("Ingrese la marca");
    matriculas.push(matricula);
    marcas.push(marca);
    alert("Vehiculo ingresado");
    console.log(matriculas);
    console.log(marcas);
}

function salidaVehiculo(matriculas, marcas, suma){
   let matricula = prompt("Ingrese la matricula");
   let pago = 0;
   let cambio = 0;

    for(let i = 0; i < matriculas.length; i++){
        if(matriculas[i] == matricula){
            let horas = parseInt(prompt("Ingrese las horas"));
                    if(horas >= 1 && horas <= 3){
                        alert("El monto a pagar es de $100");
                        pago = parseInt(prompt("Ingrese el pago"));

                        if(pago > 100){
                            cambio = pago - 100;
                            alert("Su cambio es de: " + cambio + " pesos");
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }
                            resta = 1;

                        }if(pago == 100){
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }
                            suma = suma - 1;

                        }if(pago < 100){
                            alert("El pago es insuficiente");
                        }
                    }    

                        if(horas >= 4 && horas <= 5){
                            alert("El monto a pagar es de $200");
                            pago = prompt("Ingrese el pago");

                            if(pago > 200){
                                cambio = pago - 200;
                                alert("Su cambio es de: " + cambio + " pesos");
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }
                                suma = suma - 1;

                            }if(pago == 200){
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }
                                suma = suma - 1;

                            }if(pago < 200){
                                alert("El pago es insuficiente")
                            }
                        }
                        
                        if(horas >= 6){
                            alert("El monto a pagar es de $500");
                            pago = prompt("Ingrese el pago");

                            if(pago > 500){
                            cambio = pago - 500;
                            alert("Su cambio es de: " + cambio + " pesos");
                            alert("Gracias por su visita");
                            for(let i = 0; i < matriculas.length; i++){
                                if(matriculas[i] == matricula){
                                    matriculas.splice(i, 1);
                                    marcas.splice(i, 1);
                                }
                            }
                            suma = suma - 1;

                            }if(pago == 500){
                                alert("Gracias por su visita");
                                for(let i = 0; i < matriculas.length; i++){
                                    if(matriculas[i] == matricula){
                                        matriculas.splice(i, 1);
                                        marcas.splice(i, 1);
                                    }
                                }
                                suma = suma - 1;

                            }if(pago < 500){
                                alert("El pago es insuficiente")
                            }
                        }
            } else{
                alert("Matricula Incorrecta")
            }
            console.log(matriculas);
            console.log(marcas);
        }
    }

    function autos (matriculas, marcas, suma){
        let opc = prompt("1. Autos en el estacinamiento" + "\n" + "2. Buscar autos por matricula" + "\n" + "3. Buscar autos por marca");
        switch (opc) {

            case "1":
                alert("Hay " + suma + " autos en el estacionamiento");
            break;
            case "2":
                let matricula = prompt("Ingrese la matricula");
                    for(let i = 0; i < matriculas.length; i++){
                        if(matriculas[i] == matricula){
                            alert("Matricula: " + matriculas[i] + "\n" + "Marca: " + marcas[i]);
                        }
                    }
            break;

            case "3":
                let marca = prompt("Ingrese la marca");
                    for(let i = 0; i < marcas.length; i++){
                        if(marcas[i] == marca){
                            alert("Matricula: " + matriculas[i] + "\n" + "Marca: " + marcas[i]);
                        }
                    }
            break;
        }
}