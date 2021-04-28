<?php

function openConn(){

    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = 'projekti2021';

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

function closeConn($conn){
    $conn->close();

}

?> 

