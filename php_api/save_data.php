<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


$con=mysqli_connect("localhost","admin","admin","js_ajax_example");

$qr=mysqli_query($con,"INSERT INTO `users`(`name`, `email`, `age`, `qualification`) VALUES ('".$_REQUEST['name']."','".$_REQUEST['email']."','".$_REQUEST['age']."','".$_REQUEST['qual']."')");
if($qr){
    echo "Inserted";
}
else{
    echo "Error in  Saving User";
}