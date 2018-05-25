<?php
  $connect = mysqli_connect("localhost","root","","electromake");
  $data = json_decode(file_get_contents("php://input"));

  if(count($data)>0){
    $user_id  = mysqli_real_escape_string($connect, $data->user_id);
  }

  $sql = "DELETE FROM participant_details where user_id = '$user_id';";
echo($sql);
  $result = mysqli_query($connect,$sql);

  if($result){
    echo "Team Deleted";
  }
  else{
    echo "Team unable to Delete";
  }

?>
