/* 
Monedas a convetir:
Dólar
Peso Mexicano
Peso Colombiano
Euro
Libra Esterlina
 */

let DolarAPesoColombiano = 3800;
let DolarALibraEsterlina = 0.73;
let DolarAPesoMexicano = 20.30;
let DolarAEuro = 0.86;

let PesoColombianoADolar = 0.00027;
let PesoColombianoALibraEsterlina = 0.00019;
let PesoColombianoAPesoMexicano = 0.0054;
let PesoColombianoAEuro = 0.00023;

let LibraEsterlinaAPesoColombiano = 5213;
let LibraEsterlinaAPesoMexicano = 27.99;
let LibraEsterlinaADolar = 1.38;
let LibraEsterlinaAEuro = 1.19;

let EuroAPesoMexicano = 23.59;
let EuroAPesoColombiano = 4394;
let EuroADolar = 1.16;
let EuroALibraEsterlina = 0.84;



function CapturarDatos() {
    let EligeTuMoneda1 = document.getElementById("EligeTuMoneda1").value;
    let EligeTuMoneda2 = document.getElementById("EligeTuMoneda2").value;
    let Convertir = document.getElementById("Convertir").value;
    let Resultado = 0;

    if (EligeTuMoneda1 === "Dolar" && EligeTuMoneda2 === "Peso colombiano") {
        Resultado = DolarAPesoColombiano * Convertir;
    }else if (EligeTuMoneda1 === "Dolar" && EligeTuMoneda2 === "Libra esterlina") {
        Resultado = DolarALibraEsterlina * Convertir;
    }else if (EligeTuMoneda1 === "Dolar" && EligeTuMoneda2 === "Peso mexicano") {
    Resultado = DolarAPesoMexicano * Convertir;
    }else if (EligeTuMoneda1 === "Dolar" && EligeTuMoneda2 === "Euro") {
    Resultado = DolarAEuro * Convertir;

    }else if (EligeTuMoneda1 === "Peso colombiano" && EligeTuMoneda2 === "Dolar") {
        Resultado = PesoColombianoADolar * Convertir;
    }else if (EligeTuMoneda1 === "Peso colombiano" && EligeTuMoneda2 === "Libra esterlina") {
        Resultado = PesoColombianoALibraEsterlina * Convertir;
    }else if (EligeTuMoneda1 === "Peso colombiano" && EligeTuMoneda2 === "Peso mexicano") {
         Resultado = PesoColombianoAPesoMexicano * Convertir;
    }else if (EligeTuMoneda1 === "Peso colombiano" && EligeTuMoneda2 === "Euro") {
        Resultado = PesoColombianoAEuro * Convertir;
    
    }else if (EligeTuMoneda1 === "Libra esterlina" && EligeTuMoneda2 === "Peso colombiano") {
         Resultado = LibraEsterlinaAPesoColombiano * Convertir;
    }else if (EligeTuMoneda1 === "Libra esterlina" && EligeTuMoneda2 === "Peso mexicano") {
        Resultado = LibraEsterlinaAPesoMexicano * Convertir;
    }else if (EligeTuMoneda1 === "Libra esterlina" && EligeTuMoneda2 === "Dolar") {
        Resultado = LibraEsterlinaADolar * Convertir;
    }else if (EligeTuMoneda1 === "Libra esterlina" && EligeTuMoneda2 === "Euro") {
        Resultado = LibraEsterlinaAEuro * Convertir;

    }else if (EligeTuMoneda1 === "Euro" && EligeTuMoneda2 === "Peso mexicano") {
        Resultado = EuroAPesoMexicano * Convertir;
   }else if (EligeTuMoneda1 === "Euro" && EligeTuMoneda2 === "Peso colombiano") {
       Resultado = EuroAPesoColombiano * Convertir;
   }else if (EligeTuMoneda1 === "Euro" && EligeTuMoneda2 === "Dolar") {
       Resultado = EuroADolar * Convertir;
   }else if (EligeTuMoneda1 === "Euro" && EligeTuMoneda2 === "Libra esterlina") {
       Resultado = EuroALibraEsterlina * Convertir;  
}else{ 
    alert("Todos los campos son requeridos");
}
document.getElementById("inputConver").value = Resultado;
}
    
 