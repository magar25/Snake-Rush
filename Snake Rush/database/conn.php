

<?php


// creating connection

$conn = mysqli_connect("localhost","root","","scores"); 


// cheking connection

if ($conn -> connect_error){
    die("connection failed: ".$conn -> connection_error);

} 

echo "connected successfully";




?>
