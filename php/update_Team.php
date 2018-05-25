<?php

  $connect = mysqli_connect("localhost","root","","electromake");

  $data = json_decode(file_get_contents("php://input"));

  if(count($data) > 0){
    $user_id  = mysqli_real_escape_string($connect, $data->userid);
    $teamname = mysqli_real_escape_string($connect, $data->teamname);
    $money = mysqli_real_escape_string($connect, $data->money);
    $team_members = mysqli_real_escape_string($connect, $data->team_members);
    $phonenum = mysqli_real_escape_string($connect, $data->phonenum);

  }

  $sql = "UPDATE participant_details SET team_name='$teamname',team_members=$team_members,phone_num=$phonenum,money=$money where user_id='$user_id'";
  $execution = mysqli_query($connect,$sql);
  if($execution){
    echo "Data Succesfully Updated";
  }
  else{
    echo "Data not Updated";
  }

?>
