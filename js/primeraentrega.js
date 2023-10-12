let nombreUsuario = prompt("Ingresa tu nombre");

alert("Bienvenido/a a mas rack " + nombreUsuario);

let usuarioEleccion = "si";

function login() {
    let ingresar = false;
    let intentos = 2;
    for (let i = intentos; i > 0; i--) {
        let respuesta = prompt("¿Tienes cuenta con nosotros? Tienes " + i + " intentos.");
        if (respuesta === usuarioEleccion) {
            alert("Bienvenido/a a mas rack. " + nombreUsuario);
            ingresar = true;
            break;
        } else {
            alert("Error. Te quedan " + (i - 1) + " intentos.");
        }
    }
    return ingresar;
}

let ingresar = login();

if (ingresar) {
    let saldo = 1000;
    alert("Tu saldo actual es $ " + saldo);

    let productos = {
        viga: { nombre: "viga", stock: 10, precio: 800 },
        pilar: { nombre: "pilar", stock: 15, precio: 500 },
        bastidor: { nombre: "bastidor", stock: 8, precio: 100 },
        placa: { nombre: "placa", stock: 5, precio: 300 },
        batente: { nombre: "batente", stock: 12, precio: 80 },
    };

    let carroCompras = [];
    
    function mostrarProductos() {
        let infoProductos = Object.keys(productos)
            .map((key) => {
                let p = productos[key];
                return `${key}: ${p.nombre} - Precio: $${p.precio.toFixed(2)} - Stock: ${p.stock}`;
            })
            .join("\n");
        alert("Productos disponibles:\n" + infoProductos);
    }

    function realizarCompra() {
        let agregarAlCarro = prompt("Ingresa el nombre del producto que deseas comprar (X para salir)");

        while (agregarAlCarro.toUpperCase() !== "X" && productos[agregarAlCarro]) {
            let productoSeleccionado = productos[agregarAlCarro];

            if (productoSeleccionado.stock > 0 && saldo >= productoSeleccionado.precio) {
                let cantidad = parseInt(prompt(`Ingresa la cantidad de ${productoSeleccionado.nombre} que deseas comprar:`));

                if (Number.isNaN(cantidad) || cantidad <= 0) {
                    alert("La cantidad ingresada no es válida. Por favor, ingresa una cantidad válida.");
                } else if (cantidad > productoSeleccionado.stock) {
                    alert("La cantidad ingresada supera el stock disponible. Por favor, elige una cantidad menor.");
                } else {
                    let compra = {
                        producto: productoSeleccionado.nombre,
                        cantidad: cantidad,
                        precioUnitario: productoSeleccionado.precio,
                        subtotal: cantidad * productoSeleccionado.precio
                    };

                    carroCompras.push(compra);

                    productoSeleccionado.stock -= cantidad;
                    saldo -= compra.subtotal;

                    alert(`Compra exitosa. Has comprado ${cantidad} ${productoSeleccionado.nombre}(s).`);
                    alert(`Tu carro de compras actual: ${JSON.stringify(carroCompras)}`);
                    alert(`Tu saldo actual: ${saldo}`);
                }
            } else {
                if (productoSeleccionado.stock === 0) {
                    alert("Producto agotado. No se puede agregar al carro.");
                } else {
                    alert("Fondos insuficientes para realizar la compra.");
                }
            }

            agregarAlCarro = prompt("Ingresa el nombre del producto que deseas comprar (X para salir)");
        }
    }

    function realizarDeposito() {
        let cuentacorriente = parseInt(prompt("Ingresa monto cuenta corriente"));
        if (Number.isNaN(cuentacorriente)) {
            alert("El valor ingresado no es un número");
        } else {
            saldo += cuentacorriente;
            alert("Depósito exitoso. Tu nuevo saldo es $ " + saldo);
        }
    }

    function calcularTotalCompra() {
        let totalCompra = carroCompras.reduce((total, compra) => total + compra.subtotal, 0);
        return totalCompra;
    }

    function ejecutarTienda() {
        let opcion = prompt("Elije una opción: \n1- Productos. \n2 - Compras.  \n3 - Cuenta corriente. \n4 - Ver carro de compras. \nPresiona X para finalizar.");

        while (opcion.toUpperCase() !== "X") {
            switch (opcion) {
                case "1":
                    mostrarProductos();
                    break;
                case "2":
                    realizarCompra();
                    break;
                case "3":
                    realizarDeposito();
                    break;
                case "4":
                    alert("Tu carro de compras actual: " + JSON.stringify(carroCompras));
                    alert("Total de la compra: $" + calcularTotalCompra());
                    break;
                default:
                    alert("Elegiste una opción inválida");
                    break;
            }
            opcion = prompt("Elije una opción: \n1- Productos. \n2 - Compras.  \n3 - Cuenta corriente. \n4 - Ver carro de compras.\nPresiona X para finalizar.");
        }
    }

    ejecutarTienda();
} else {
    let opcion = prompt("¿Desea crear un usuario? (si/no)");

    if (opcion.toLowerCase() === "si") {
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let edad;

        while (true) {
            edad = parseInt(prompt("Ingrese su edad:"));

            if (!Number.isNaN(edad)) {
                break;
            } else {
                alert("El valor ingresado no es un número válido. Inténtelo nuevamente.");
            }
        }

        let correoElectronico = prompt("Ingrese su correo electrónico:");
        // Validar el correo electrónico si es necesario

        alert("Usuario creado correctamente. Aquí están los detalles:\n" + 
            "Nombre: " + nombre + "\n" + 
            "Apellido: " + apellido + "\n" + 
            "Edad: " + edad + "\n" + 
            "Correo Electrónico: " + correoElectronico);
    } else {
        alert("No se creó ningún usuario. Hasta luego.");
    }
}
alert("Gracias por visitar mas rack");
