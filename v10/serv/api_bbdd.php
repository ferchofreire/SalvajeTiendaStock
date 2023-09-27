<?php

    include "conx.php";
   include "cabecerasJson.php";

    $f = $_GET["f"];
    $data = json_encode($_POST["data"]);

    switch ($f){

        case "get_all_items":

            $ListaArticulos = [];
            $ListaVentas = [];
            $ListaStock = [];
            $ListaTurnos = [];

            $retorno = [];

            $q1 = mysqli_query($conn, "SELECT * FROM articulos");

            if ($q1){
                while($r = mysqli_fetch_assoc($q1)){

                    $stock = json_decode($r["reducciones"]);
                    array_push($ListaArticulos, array(
                        "id"=>$r["id"],
                        "cod"=>$r["cod"],
                        "img"=>$r["img"],
                        "titulo"=>$r["titulo"],
                        "tipo"=>$r["tipo"],
                        "usd"=>$r["usd"],
                        "costo"=>$r["costo"],
                        "precio"=>$r["precio"],
                        "proveedor"=>$r["proveedor"],
                        "detalle"=>$r["detalle"],
                        "reducciones"=>$stock
                    ));
                }

            }

            $q2 = mysqli_query($conn, "SELECT * FROM ventas");
            if ($q2){
                while($r = mysqli_fetch_assoc($q2)){

                    $art = json_decode($r["Articulos"]);

                    array_push($ListaVentas, array(
                        "id"=>$r["id"],
                        "Titulo"=>$r["Titulo"],
                        "Total"=>$r["Total"],
                        "Factura"=>$r["Factura"],
                        "Hora"=>$r["Hora"],
                        "Fecha"=>$r["Fecha"],
                        "Detalle"=>$r["Detalle"],
                        "Articulos"=>$art
                        
                    ));
                }

            }


            array_push($retorno, $ListaArticulos);
            array_push($retorno, $ListaVentas);
            print_r(json_encode($retorno));


        break;
        case "push_all_items":
        break;
        case "push_item":
        break;
        case "push_turno":
        break;
        case "push_cotizacion":
        break;
        case "push_cotizacion":
        break;

        case "checkfunc":
            echo "{\"s\":\"funcionando\"}";
        break;

    }
?>