
function calculator() {
  var dolarOficialComa = document.getElementById("NumberF").value;
 var cuantoCompramosComa = document.getElementById("NumberC").value;
  var aCuantoVendemosComa = document.getElementById("NumberS").value;
  


    dolarOficial = dolarOficialComa.toString().replace(/\,/g, '.');
    cuantoCompramos = cuantoCompramosComa.toString().replace(/\,/g, '.');
    aCuantoVendemos = aCuantoVendemosComa.toString().replace(/\,/g, '.');

    var pesosArgAVender = cuantoCompramos * dolarOficial;
    var pesosArgAComprar = cuantoCompramos * aCuantoVendemos;
    var ganancia = pesosArgAComprar - pesosArgAVender;

    buttonre.addEventListener("click", function(){
    if(dolarOficialComa && cuantoCompramosComa && aCuantoVendemosComa) {
    document.getElementById("dolarOficialComa").innerHTML = "El dolar oficial + impuestos está " + dolarOficialComa;
    document.getElementById("pesosArgAVender").innerHTML = "Se venden " + pesosArgAVender + " pesos argentinos al banco";
    document.getElementById("cuantoCompramosComa").innerHTML = "Se compran " + cuantoCompramosComa;
    document.getElementById("aCuantoVendemosComa").innerHTML = "El dolares blue está " + aCuantoVendemosComa;
    document.getElementById("pesosArgAComprar").innerHTML = "Al vender al blue se cobraría " + pesosArgAComprar;
    document.getElementById("resultado").innerHTML = "Ganancia: " + ganancia;

    return ganancia;
}
    })

};

buttonreset.addEventListener("click", function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("dolarOficialComa").innerHTML = "";
    document.getElementById("pesosArgAVender").innerHTML = "";
    document.getElementById("cuantoCompramosComa").innerHTML = "";
    document.getElementById("aCuantoVendemosComa").innerHTML = "";
    document.getElementById("pesosArgAComprar").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
  } 
  )
  
