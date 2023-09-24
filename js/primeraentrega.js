let nombreUsuario = prompt("Ingresa tu nombre");

alert('Bienvenido/a a mas rack ' + nombreUsuario);

let usuarioEleccion = 'si';
function login() {
    let ingresar = false;
    let intentos = 2;
    for (let i = intentos; i > 0; i--) {
        let respuesta = prompt('¿Tienes cuenta con nosotros? Tienes ' + i + ' intentos.');
        if (respuesta === usuarioEleccion) {
            alert('Bienvenido/a a mas rack.');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;//por que cuando pongo este pedaso de codigo al finalir el crear usuario no se ejecuta?
}

let ingresar = login(); 

if (ingresar) { 

    let saldo = 0;

    let opcion = prompt('Elije una opción: \n1- Productos. \n2 - Compras.  \n3 - Cuenta corriente. \nPresiona X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                alert("Productos agotados o no encontrados.");
                break;
                //dejo esto asi por que creeo que vamos a ver la forma de rellenar esta parte mas adelante
                case '2':
                    let precioProducto = parseFloat(prompt('Ingresa el precio del producto que deseas comprar'));
                    if (Number.isNaN(precioProducto) || precioProducto <= 0) {
                        alert('El valor ingresado no es válido. Por favor, ingresa un precio válido.');
                    } else if (saldo >= precioProducto) {
                        saldo -= precioProducto;
                        alert('Compra exitosa. Tu nuevo saldo es' + saldo);
                    } else {
                        alert('Fondos insuficientes para realizar la compra');
                    }
                    break;
            case '3':
                let cuentacorriente = parseInt(prompt('Ingresa monto cuenta corriente'));
                if (Number.isNaN(cuentacorriente)) {
                    alert('El valor ingresado no es un número');
                } else {
                    saldo += cuentacorriente;
                    alert('Depósito exitoso. Tu nuevo saldo es $ ' + saldo);
                }

                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        opcion = prompt('Elije una opción: \n1- Productos. \n2 - Compras.  \n3 - Cuenta corriente. \nPresiona X para finalizar.');
    }
} else {
    let opcion = prompt('¿Desea crear un usuario? (si/no)');

    if (opcion.toLowerCase() === 'si') {
        let nombre = prompt('Ingrese su nombre:');
        let apellido = prompt('Ingrese su apellido:');
        let edad;

    while (true) {
        edad = parseInt(prompt('Ingrese su edad:'));

        if (!Number.isNaN(edad)) {
            break; 
        } else {
            alert('El valor ingresado no es un número válido. Inténtelo nuevamente.');
        }
    }

        let correoElectrónico = prompt('Ingrese su correo electrónico:');
//como se hace para que en caso de que el correo no sea valido lo tenga que repetir
        alert('Usuario creado correctamente. Aquí están los detalles:\n' +
            'Nombre: ' + nombre + '\n' +
            'Apellido: ' + apellido + '\n' +
            'Edad: ' + edad + '\n' +
            'Correo Electrónico: ' + correoElectrónico);
         //no se como hacer que de aca vuelva a ingresar    
        } else {
        alert('No se creó ningún usuario. Hasta luego.');
    }
   
}
alert('Gracias por visitar mas rack');
//este es por que mi proyecto se basa en ventas de rack y ya que es una paguina de ventas se lo queria agregar 