



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Pedidos</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <h1>Mis Pedidos</h1>

    <div class="container" id="pedidoContainer">
        <p>Cargando pedidos...</p>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const pedidoContainer = document.getElementById('pedidoContainer');
            let pedidoNumero = 1; // Contador para el número de pedido

            // Verificar si hay datos en sessionStorage
            if (sessionStorage.getItem('carrito')) {
                const carrito = JSON.parse(sessionStorage.getItem('carrito'));

                // Limpiar el contenido actual
                pedidoContainer.innerHTML = '';

                // Recorrer el carrito y mostrar cada producto
                carrito.forEach(producto => {
                    const pedidoItem = document.createElement('div');
                    pedidoItem.classList.add('pedido-item');
                    pedidoItem.innerHTML = `
                        <div class="pedido-numero">${pedidoNumero}</div>
                        <img src="${producto.imagen}" alt="${producto.titulo}">
                        <div>
                            <h3>${producto.titulo}</h3>
                            <p>Precio: ${producto.precio.toFixed(0)} Gs</p>
                            <p>Cantidad: ${producto.cantidad}</p>
                        </div>
                    `;
                    pedidoContainer.appendChild(pedidoItem);
                    pedidoNumero++; // Incrementar el número de pedido
                });
            } else {
                // Mostrar mensaje si no hay productos en el carrito
                pedidoContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
            }
        });
    </script>

</body>

</html>










