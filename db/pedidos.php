<?php

    include 'conexion.php';


    $nombre_producto = $_POST['nombre_producto'];
    $precio = $_POST['precio'];
    $cantidad = $_POST['cantidad'];
    $nro_atencion = $_POST['nro_atencion'];

    $query = "INSERT INTO lista_pedidos(nombre_producto, precio, cantidad, nro_atencion)
             VALUES('$nombre_producto', '$precio', '$cantidad', '$nro_atencion')";
    


    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("Pedido realizado");
                window.location = "../index.html";
            </script>
            ';
    }

    mysqli_close($conexion);

?>
