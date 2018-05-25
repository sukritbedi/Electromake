<?php
  $connect = mysqli_connect("localhost","root","","electromake");
  $data = json_decode(file_get_contents("php://input"));

  if(count($data)>0){
    $user_id  = mysqli_real_escape_string($connect, $data->user_id);
  }
  $sql = "SELECT * FROM participant_details where user_id = '$user_id';";

  $result = mysqli_query($connect,$sql);

  /*
  $json_array = array();
  while($row = mysqli_fetch_assoc($result))
  {
    $json_array[] = $row;
  }
  echo json_encode($json_array);
  */
  $ans = array();
  $row=mysqli_fetch_assoc($result);
  $ans[]=array("emp_id"=>$row['user_id'],"user_pass"=>$row['user_pass'],"team_name"=>$row['money'],"team_members"=>$row['team_members'],"phone_num"=>$row['phone_num']);
  echo (json_encode($ans));
  
?>
