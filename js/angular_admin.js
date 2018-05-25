var app = angular.module('myApp',[])
								 .controller('GetUsers',function($scope,$http,$interval){

									  var auto = $interval(function() {
											$http.get('../php/view_Team.php')
	         							.success(function(data) {
					  						$scope.users = data;
						 					})
									  },100);

										$scope.teamview = function(user_id){
											$http({
												method:'post',
												url:'../php/modal_Team.php',
												data:{'user_id':user_id}
											})
											.success(function(data) {
												$scope.team_data = data;
												console.log($scope.team_data);
										})
									}
								})

								.controller('addUser',function($scope,$http) {
									 $scope.addTeamNew = function() {
										 console.log('1234')
									 		$http({
												method:'post',
												url:'../php/add_Team.php',
												data: {'user_id':$scope.user_id,'user_password':$scope.user_password,'team_leader':$scope.team_leader,'memberNum':$scope.memberNum,'phoneNum':$scope.phoneNum}
											})
											.success(function(data) {
												console.log(data);
												alert(data);
											})
									 }
								})

								.controller('removeUser', function($scope,$http,$interval){
									var auto = $interval(function() {
										$http.get('../php/view_Team.php')
											.success(function(data) {
											$scope.users = data;
										})
									},2000);

									$scope.deleteTeam = function(user_id){
										console.log(user_id);
										$http({
											method:'post',
											url:'../php/remove_Team.php',
											data:{'user_id':user_id}
										})
										.success(function(data) {
											alert(data);
										})
									}
								})

								.controller('updateUser', function($scope,$http,$interval){
									$scope.Update = false;
									var auto = $interval(function() {
										$http.get('../php/view_Team.php')
											.success(function(data) {
											$scope.users = data;
										})
									},500)
									$scope.UpdateTeam = function(user_id,team_name,money,team_members,phone_num) {
										$scope.userid = user_id;
										$scope.teamname = team_name;
										$scope.money = money;
										$scope.team_members = team_members;
										$scope.phonenum = phone_num;
										$scope.Update = true;
									}

									$scope.updateData = function() {
										$http({
											method:'post',
											url:'../php/update_Team.php',
											data: {'userid':$scope.userid,'teamname':$scope.teamname,'money':$scope.money,'team_members':$scope.team_members,'phonenum':$scope.phonenum}
										})
										.success(function(data) {
											alert(data);
										})
										$scope.Update = false;
									};
								})


								.controller('chngPswrd', function($scope,$http,$interval) {
									$http.get('../php/view_Team.php')
										.success(function(data) {
										// here the data from the api is assigned to a variable named users
										console.log(data);
										$scope.users = data;
									})
								})


								.controller('addComponents', function($scope,$http) {
										$scope.addCompNew = function() {
											 $http({
												 method:'post',
												 url:'../php/add_Comp.php',
												 data: {'compName':$scope.compName,'compCost':$scope.compCost}
											 })
											 .success(function(data) {
												 alert(data);
											 })
										}
									})


									.controller('viewComp', function($scope,$http,$interval) {
										var auto = $interval(function(){
											$http.get('../php/view_Comp.php')
											.success(function(data) {
												$scope.components = data;
											})
										}
									)
									})


									.controller('removeComp', function($scope,$http,$interval){
										var auto = $interval(function() {
											$http.get('../php/view_Comp.php')
												.success(function(data) {
												$scope.components = data;
											})
										},2000);

										$scope.deleteComp = function(comp_name){
											$http({
												method:'post',
												url:'../php/remove_Comp.php',
												data:{'comp_name':comp_name}
											})
											.success(function(data) {
												alert(data);
											})
										}
									});
