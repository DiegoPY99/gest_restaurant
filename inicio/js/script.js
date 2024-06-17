document.addEventListener('DOMContentLoaded', function () {
    const btnAgregarPedido = document.querySelectorAll('.food-items button');
    const carritoItems = document.querySelector('.carrito-items');
    const totalElement = document.querySelector('.total'); // Elemento donde mostraremos el total

    let totalPedido = 0; // Variable para mantener el total del pedido

    btnAgregarPedido.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.food-items');
            const titulo = item.querySelector('h5').textContent;
            const precio = parseFloat(item.querySelector('.precio').textContent.replace(/\D/g, ''));
            const imagen = item.querySelector('img').src;

            const itemsEnCarrito = carritoItems.querySelectorAll('.carrito-item');
            let articuloYaEnCarrito = false;

            itemsEnCarrito.forEach(item => {
                const tituloEnCarrito = item.querySelector('.carrito-item-titulo').textContent;
                if (tituloEnCarrito === titulo) {
                    articuloYaEnCarrito = true;
                    const cantidadActual = parseInt(item.querySelector('.carrito-item-cantidad').textContent);
                    item.querySelector('.carrito-item-cantidad').textContent = cantidadActual + 1;
                    totalPedido += precio;
                    totalElement.textContent = `Total: ${totalPedido.toFixed(0)} Gs`;
                }
            });

            if (!articuloYaEnCarrito) {
                const nuevoItem = document.createElement('div');
                nuevoItem.classList.add('carrito-item');
                nuevoItem.innerHTML = `
                    <img src="${imagen}" alt="producto">
                    <div class="carrito-item-info">
                        <h5 class="carrito-item-titulo">${titulo}</h5>
                        <p class="carrito-item-precio">${precio.toFixed()} Gs</p>
                    </div>
                    <p class="carrito-item-cantidad">1</p>
                    <button class="btn-eliminar"><i class="fas fa-trash"></i></button>
                `;

                carritoItems.appendChild(nuevoItem);
                totalPedido += precio;
                totalElement.textContent = `Total: ${totalPedido.toFixed(0)} Gs`;
            }
        });
    });

    const realizarPedidoBtn = document.getElementById('realizarPedidoBtn');
    realizarPedidoBtn.addEventListener('click', () => {
        // Obtener los datos del carrito
        const carrito = [];
        const itemsEnCarrito = carritoItems.querySelectorAll('.carrito-item');

        itemsEnCarrito.forEach(item => {
            const titulo = item.querySelector('.carrito-item-titulo').textContent;
            const precio = parseFloat(item.querySelector('.carrito-item-precio').textContent.replace(/\D/g, ''));
            const cantidad = parseInt(item.querySelector('.carrito-item-cantidad').textContent);
            const imagen = item.querySelector('img').src;

            carrito.push({
                titulo: titulo,
                precio: precio,
                cantidad: cantidad,
                imagen: imagen
            });
        });

        // Guardar el carrito en sessionStorage para enviarlo a lista_pedido.php
        sessionStorage.setItem('carrito', JSON.stringify(carrito));

        // Redirigir al usuario a lista_pedido.php
        window.location.href = './orden_pedido/lista_pedido.php';
    });
});














