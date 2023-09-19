//calcular el perimetro de un circulo

function calcularPerimetroCirculo(diametro) {
   let perimetro = diametro*3.141592
    console.log("el perimetro calculado es de: " + perimetro + "metros")
    }


    const perimetroFlechaCirculo = (diametro) => console.log("el perimetro calculado es de: " + diametro*3.141592);
    


    //calcular el area de un rectangulo

    function calcularAreaRectangulo(base, altura) {
        let area = base*altura
         console.log("el área calculada es de: " + area + " metros")
         }

    
    const areaFlechaRectangulo = (base, altura) => console.log("el área calculada es de: " + base*altura);

    //calcular el cuadrado de un número

    function calcularCuadradoNumero (valor) {
        let numeroCuadrado = valor*valor
         console.log("el número cuadrado es: " + numeroCuadrado )
         }

    const numeroFlechaCuadrado = (valor) => console.log("el número cuadrado es: " + valor*valor);


    // * calcular la conversion de grados celsius a farenheit


    function gradosFarenheit (celcius) {
        let farenheit = (celcius*1.8) + 32
        console.log("la temperatura es de: " + farenheit + " grados farenheit")
    }

    const gradosFlechaFarenheit = (celcius) => console.log("la temperatura es de: " + (celcius*1.8 + 32) + " grados farenheit")

    // calcular el valor del voltaje dadas la resistencia y la corriente

    function calcularVoltaje(corriente, resistencia) {
        let voltaje = corriente*resistencia
         console.log("el voltaje es de: " + voltaje + " volts")
         }

    
    const voltajeFlecha = (corriente, resistencia) => console.log("el voltaje es de: " + corriente*resistencia + " volts");

    // Calcular el volumen de una esfera


    function volumenEsfera(radio) {
        let volumen = radio*radio*radio*3.141592*1.33333
         console.log("el volumen de la esfera es de: " + volumen + "metros cubicos")
         }
     
     
         const volumenFlechaCirculo = (radio) => console.log("el volumen calculado es de: " + (radio*radio*radio*3.141592*1.3333) + " metros cubicos");
         
     
