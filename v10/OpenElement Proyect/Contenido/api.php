<?php

    include "conx.php";
    function Cabecera($a){
        switch($a){
            case "JSON":
                include "cabecerasJson.php";
            break;

        }
        
    }
    include "cabecerasJson.php";

    $f = $_GET["f"];
    $data = json_encode($_POST["data"]);

    switch ($f){

        case "get_all_items":

            Cabecera("JSON");
            $ListaArticulos = [];
            $ListaVentas = [];
            $ListaTurnos = [];
            $ListaFotos = [];

            $retorno = [];

            $archArticulos = json_decode(file_get_contents("articulos.json"));
            $archVentas = json_decode(file_get_contents("ventas.json"));
            $archTurnos = json_decode(file_get_contents("turnos.json"));
            $archConf = json_decode(file_get_contents("conf.json"));


            // Lista de fotos:
                $path    = './fotos/';
                //$files = scandir($path);
                $files = array_diff(scandir($path), array('.', '..'));
                foreach($files as $img){
                    array_push($ListaFotos, $img);
                }

                //array_push($ListaFotos, $files);

            array_push($retorno, $archArticulos);
            array_push($retorno, $archVentas);
            array_push($retorno, $archTurnos);
            array_push($retorno, $archConf);
            array_push($retorno, $ListaFotos);

            print_r(json_encode($retorno));


        break;
        case "setDollar":

            Cabecera("JSON");
            $archConf = fopen("conf.json", "w") or die('{"status":"error"}');
            $json = '{"dolar":"'.$_GET['p'].'"}';
            fwrite($archConf, $json);
            fclose($archConf);
            echo '{"status":"OK"}';

        break;
        case "push_articulo":

            Cabecera("JSON");

            $nuevoARTICULO = json_decode($_POST["data"]);
            $archArticulos = json_decode(file_get_contents("articulos.json"));
            array_push($archArticulos, $nuevoARTICULO);

            $jsonFile = fopen("articulos.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($archArticulos));
            fclose($jsonFile);

            echo '{"status":"OK"}';

        break;
        case "refresh_articulo":

            Cabecera("JSON");

            $envio = json_decode($_POST["data"]);
            
            $retorno = [];
            $archArticulos = json_decode(file_get_contents("articulos.json"));
            //print_r("{\"s\":\"ok\"}");
            array_push($retorno,$archArticulos);
            //print_r($retorno[0]);

            $ids = array_column($archArticulos, 'id');
            $searID =  array_search($envio->id, $ids);

            $archArticulos[$searID] = $envio;

            $jsonFile = fopen("articulos.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($archArticulos));
            fclose($jsonFile);

            echo '{"status":"OK"}';

        break;
        case "remove_articulo":

            Cabecera("JSON");

            $salida = [];

            $envio = $_GET["id"];

            $archArticulos = json_decode(file_get_contents("articulos.json"));
            $ids = array_column($archArticulos, 'id');
            $searID = array_search($envio, $ids);
            unset($archArticulos[$searID]);
            foreach($archArticulos as $itm){
                array_push($salida, $itm);
            }

            $jsonFile = fopen("articulos.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($salida));
            fclose($jsonFile);

            echo '{"status":"OK"}';

        break;
        case "push_turnos":
            $turnos = Json_decode($_POST["turnos"]);
            $jsonFile = fopen("turnos.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($turnos));
            fclose($jsonFile);
            
            echo '{"status":"OK"}';

        break;

        case "push_venta":
            Cabecera("JSON");

            $nuevoARTICULO = json_decode($_POST["data"]);
            $archArticulos = json_decode(file_get_contents("ventas.json"));
            array_push($archArticulos, $nuevoARTICULO);

            $jsonFile = fopen("ventas.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($archArticulos));
            fclose($jsonFile);

            echo '{"status":"OK"}';
        break;
        case "remove_venta":
            Cabecera("JSON");

            $salida = [];

            $envio = $_GET["id"];
            //echo $envio;
            $archArticulos = json_decode(file_get_contents("ventas.json"));
            $ids = array_column($archArticulos, 'id');
            $searID = array_search($envio, $ids);
            unset($archArticulos[$searID]);
            //print_r($archArticulos[$searID]);
            foreach($archArticulos as $itm ){
                array_push($salida, $itm);
            }

            $jsonFile = fopen("ventas.json", "w") or die('{"status":"error"}');
            fwrite($jsonFile, json_encode($salida));
            fclose($jsonFile);

            echo '{"status":"OK"}';

        break;
        
        case "checkfunc":
            echo "{\"s\":\"funcionando\"}";
        break;

        case "uploadFoto":

            $target_dir = "fotos/";
            $target_file = $target_dir . basename($_FILES["file"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
            
            // Check if image file is a actual image or fake image
            if(isset($_POST["submit"])) {
              $check = getimagesize($_FILES["file"]["tmp_name"]);
              if($check !== false) {
                //echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
              } else {
                echo '{"status":"error", "err":"No es una imágen"}';
                $uploadOk = 0;
                die;
              }
            }
            
            // Check if file already exists
            if (file_exists($target_file)) {
                echo '{"status":"error", "err":"Ya existe este archivo"}';
              $uploadOk = 0;
              die;
            }
            
            // Check file size
            if ($_FILES["file"]["size"] > 500000) {
              echo '{"status":"error", "err":"Archivo demasiado grande"}';
              $uploadOk = 0;
              die;
            }
            
            // Allow certain file formats
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
            && $imageFileType != "gif" ) {
                echo '{"status":"error", "err":"Formato incopatible"}';
                $uploadOk = 0;
                die;
            }
            
            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo '{"status":"error", "err":"No se subió el archivo"}';
                die;
            // if everything is ok, try to upload file
            } else {
              if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
                //echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
                echo '{"status":"OK"}';
                die;
              } else {
                //echo "Sorry, there was an error uploading your file.";
              }
            }



        break;

    }
?>