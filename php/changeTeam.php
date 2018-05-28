<?php
$connect = mysqli_connect("localhost","root","","electromake");

$data = json_decode(file_get_contents("php://input"));

if(count($data) > 0){
  $team_name  = mysqli_real_escape_string($connect, $data->team_name);
  $pass = mysqli_real_escape_string($connect, $data->pass);
}

$sql = "UPDATE participant_details SET user_pass='$pass' where user_id='$team_name'";
$execution = mysqli_query($connect,$sql);
if($execution){
  echo "Data Succesfully Updated";
}
else{
  echo "Data not Updated";
}
?>
