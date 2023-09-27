<?php
       $version_file='?v='.mt_rand();
       //Conexion con la base de datos local
       $servidorMysql = "localhost";
       $nombreBase = "salvaje";
       $nombreUsuario = "root";
       $usuarioContrasena = "root";
   
   //Region donde esta usando la apliacion para la hora
   date_default_timezone_set('america/argentina/buenos_aires');

   $conn=mysqli_connect($servidorMysql,$nombreUsuario,$usuarioContrasena,$nombreBase);
   mysqli_set_charset($conn,"utf8");

   // Check connection
   if(!$conn) die("Connection failed: ".mysqli_connect_error());

   //Idicamos que tiene que iniciar la session para usar el form
   //if(!isset($_SESSION)){session_start();}

   ?>