
//#region Efectos CSS
var iconBx = document.querySelectorAll('.iconBx');
var contentBx = document.querySelectorAll('.contentBx');
var textbox = document.querySelectorAll('.textbox');
var msjResultado = document.querySelectorAll('.msjResultado');

for (var i = 0; i < iconBx.length; i++) {

    iconBx[i].addEventListener('mouseover', function () {
        for (var i = 0; i < contentBx.length; i++) {
            contentBx[i].className = 'contentBx';
        }

        // Para limpiar los cuadros de texto
        for (var i = 0; i < textbox.length; i++) {
            textbox[i].value = "";
        }
        
        // Para limpiar los labels
        for (var i = 0; i < msjResultado.length; i++) {
            msjResultado[i].innerHTML = "";
        }

        document.getElementById(this.dataset.id).className = 'contentBx active'

        for (var i = 0; i < iconBx.length; i++) {
            iconBx[i].className = 'iconBx';
        }
        this.className = 'iconBx active';
    })
}

//#endregion

//#region CUADRADO
function perimetroCuadrado(lado) {
    return lado * 4;
}

const areaCuadrado = (lado) => lado * lado;

// Formulario    
function calcularPerimetroCuadrado() {
    const input = document.getElementById("txtLadoCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultado(`El perimetro del cuadrado es de ${perimetro}cm.`, "lblResultadoCuadrado");
}

function calcularAreaCuadrada() {
    const input = document.getElementById("txtLadoCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultado(`El area del cuadrado es de ${area}cm.`, "lblResultadoCuadrado");
}

    
//#endregion

//#region TRIANGULO
function perimetroTriangulo(lado1, lado2, base) {
    return parseFloat(lado1) + parseFloat(lado2) + parseFloat(base);
}

const areaTriangulo = (base, altura) => (base * altura) / 2;

function alturaTrianguloIsoceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        var ladoAlCuadrado = Math.pow(lado1, 2);
        var baseAlCuadrado = Math.pow(base, 2);

        var altura = Math.sqrt(ladoAlCuadrado - (baseAlCuadrado / 4));
        return altura;
    } else {
        alert("Los lados del triangulo Isoceles no son iguales");
        return 0;
    }
}

function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("txtLado1").value;
    const lado2 = document.getElementById("txtLado2").value;
    const base = document.getElementById("txtBasePerimetro").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    resultado(`El perimetro del triangulo es de ${perimetro}cm.`, "lblResultadoPerimetroTriangulo");
}

function calcularAreaTriangulo() {
    const base = document.getElementById("txtBaseArea").value;
    const altura = document.getElementById("txtAltura").value;

    const area = areaTriangulo(base, altura);
    resultado(`El area del triangulo es de ${area}cm.`, "lblResultadoAreaTriangulo");
    
}

function calcularAlturaTrianguloIsoceles() {
    const lado1 = document.getElementById("txtLado1Isoceles").value;
    const lado2 = document.getElementById("txtLado2Isoceles").value;
    const base = document.getElementById("txtBaseIsoceles").value;

    const altura = alturaTrianguloIsoceles(lado1, lado2, base);
    if (altura > 0) {
        resultado(`La altura del triangulo isoceles es de ${altura}cm`, "lblResultadoIsoceles");
    }
}
//#endregion

//#region CIRCULO
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

function areaCirculo(radio) {
    return Math.round((radio * radio) * PI);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("txtRadio").value;

    const perimetro = perimetroCirculo(radio);
    resultado(`El perimetro es de ${perimetro}cm`, "lblResultadoCirculo");
}

function calcularAreaCirculo() {
    const radio = document.getElementById("txtRadio").value;

    const area = areaCirculo(radio);
    resultado(`El area es de ${area}cm`, "lblResultadoCirculo");
}

//#endregion

const resultado = (msj, label) => {document.getElementById(label).innerText = msj};
