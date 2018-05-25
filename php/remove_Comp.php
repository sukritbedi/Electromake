<?php
  $connect = mysqli_connect("localhost","root","","electromake");
  $data = json_decode(file_get_contents("php://input"));

  if(count($data)>0){
    $comp_name  = mysqli_real_escape_string($connect, $data->comp_name);
  }

  $sql = "DELETE FROM components_details where comp_name = '$comp_name';";
echo($sql);
  $result = mysqli_query($connect,$sql);

  if($result){
    echo "Component Deleted";
  }
  else{
    echo "Component unable to Delete";
  }

?>
