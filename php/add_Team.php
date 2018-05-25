<?php

  $connect = mysqli_connect("localhost","root","","electromake");

  $data = json_decode(file_get_contents("php://input"));

  if(count($data) > 0){
    $user_id  = mysqli_real_escape_string($connect, $data->user_id);
    $user_password = mysqli_real_escape_string($connect, $data->user_password);
    $team_leader = mysqli_real_escape_string($connect, $data->team_leader);
    $memberNum = mysqli_real_escape_string($connect, $data->memberNum);
    $phoneNum = mysqli_real_escape_string($connect, $data->phoneNum);

  }

  $sql = "INSERT INTO participant_details(user_id,user_pass,team_name,team_members,phone_num) VALUES ('$user_id','$user_password','$team_leader','$memberNum','$phoneNum')";
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
