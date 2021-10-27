alert("Bienvenido al estacionamiento")
var opc = prompt("Que de deseas hacer?," + "\n" + "1. Ingresar vehiculo" + "\n" + "2. Salida de vehiculo" + "\n" + "3. Ver estacionados" + "\n" + "5. Salir");
var matriculas = [];
var marcas = [];

function ingresarVehiculo(matriculas, marcas) {
    let matricula = prompt("Ingrese la matricula");
    let marca = prompt("Ingrese la marca");
    matriculas.push(matricula);
    marcas.push(marca);
    alert("Vehiculo ingresado");
}

function salidaVehiculo(matriculas, marcas) {
   let matricula = prompt("Ingrese la matricula");
   let horas = prompt("Ingrese las horas");
   let pago = 0;
   let cambio = 0;
   let contador = 0;
    if(horas >= 1 && horas <= 3){

        while (contador = 0){
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
                    contador = 1;

                }if(pago == 100){
                    alert("Gracias por su visita");
                    for(let i = 0; i < matriculas.length; i++){
                        if(matriculas[i] == matricula){
                            matriculas.splice(i, 1);
                            marcas.splice(i, 1);
                        }
                    }
                    contador = 1;

                }if(pago < 100){
                    alert("El pago es insuficiente");
                    contador = 0;
                }    

                if(horas >= 4 && horas <= 5){
                    alert("El monto a pagar es de $200");
                    pago = prompt("Ingrese el pago");

                    }if(pago > 200){
                        cambio = pago - 200;
                        alert("Su cambio es de: " + cambio + " pesos");
                        alert("Gracias por su visita");
                        for(let i = 0; i < matriculas.length; i++){
                            if(matriculas[i] == matricula){
                                matriculas.splice(i, 1);
                                marcas.splice(i, 1);
                            }
                        }
                        contador = 1;

                    }if(pago == 200){
                        alert("Gracias por su visita");
                        for(let i = 0; i < matriculas.length; i++){
                            if(matriculas[i] == matricula){
                                matriculas.splice(i, 1);
                                marcas.splice(i, 1);
                            }
                        }
                        contador = 1;

                    }if(pago < 200){
                        alert("El pago es insuficiente")
                        contador = 0;
                    }
                
                if(horas >= 6){
                    alert("El monto a pagar es de $500");
                    pago = prompt("Ingrese el pago");

                    }if(pago > 500){
                    cambio = pago - 500;
                    alert("Su cambio es de: " + cambio + " pesos");
                    alert("Gracias por su visita");
                    for(let i = 0; i < matriculas.length; i++){
                        if(matriculas[i] == matricula){
                            matriculas.splice(i, 1);
                            marcas.splice(i, 1);
                        }
                    }
                    contador = 1;

                    }if(pago == 500){
                        alert("Gracias por su visita");
                        for(let i = 0; i < matriculas.length; i++){
                            if(matriculas[i] == matricula){
                                matriculas.splice(i, 1);
                                marcas.splice(i, 1);
                            }
                        }
                        contador = 1;

                    }if(pago < 500){
                        alert("El pago es insuficiente")
                        contador = 0;
                    }
        }
    }
}
