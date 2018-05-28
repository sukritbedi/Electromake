<?php

  $connect = mysqli_connect("localhost","root","","electromake");

  $data = json_decode(file_get_contents("php://input"));

  if(count($data) > 0){
    $comp_name  = mysqli_real_escape_string($connect, $data->comp_name);
    $cost = mysqli_real_escape_string($connect, $data->cost);
  }

  $sql = "UPDATE components_details SET cost=$cost where comp_name='$comp_name'";
  $execution = mysqli_query($connect,$sql);
  if($execution){
    echo "Data Succesfully Updated";
  }
  else{
    echo "Data not Updated";
  }

?>
