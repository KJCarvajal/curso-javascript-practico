const precioOriginal = 100;
const descuento = 15;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function verificarCupon(codCuponValue) {
    const LISTA_CUPONES = [
        
        {
            codigo: "CODE0101",
            descuento: 10,
        },
        {
            codigo: "CODE0107",
            descuento: 20,
        },
        {
            codigo: "CODE1326",
            descuento: 30,
        }, 
    ];

    const cuponValido = (codCupon) => {return codCupon.codigo === codCuponValue};

    const cuponUsuario = LISTA_CUPONES.find(cuponValido); 
    // Metodo find() perpite traer los datos de un objeto si cumplen con las condiciones dentro de sus parentesis.
    return cuponUsuario;
}

function calcularPrecioFinal() {
    const precio = document.getElementById('inputPrice').value;
    const codCupon = document.getElementById('inputCupon').value;
    const resultado = document.getElementById('resultPrice');
    
    const cuponValido = verificarCupon(codCupon);

    console.log(`Cupon: ${codCupon}`);

    if (cuponValido) {
        const precioConDescuento = calcularPrecioConDescuento(precio, cuponValido.descuento);
        resultado.innerText = "El precio con el descuento es de $" + precioConDescuento;
    } else {
        resultado.innerText = "Ese cupon no existe";
    }
    return resultado;

}
