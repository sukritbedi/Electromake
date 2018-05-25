<?php

  $connect = mysqli_connect("localhost","root","","electromake");

  $data = json_decode(file_get_contents("php://input"));

  if(count($data) > 0){
    $compName  = mysqli_real_escape_string($connect, $data->compName);
    $compCost = mysqli_real_escape_string($connect, $data->compCost);

  }

  $sql = "INSERT INTO components_details(comp_name,cost) VALUES ('$compName',$compCost)";
  echo($sql);
  $execution = mysqli_query($connect,$sql);
  echo($execution);
  if($execution){
    echo "Data Added";
  }
  else{
    echo "Data not Added";
  }

?>
