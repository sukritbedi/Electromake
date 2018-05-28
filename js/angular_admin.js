var app = angular.module('myApp',[])
								 .controller('GetUsers',function($scope,$http,$interval,$window){

									  var auto = $interval(function() {
											$http.get('../php/view_Team.php')
	         							.success(function(data) {
					  						$scope.users = data;
						 					})
									  },100);
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
									$scope.reverseSort = false;
									$scope.sortby = 'user_id';
									var auto = $interval(function() {
										$http({
											method:'get',
											url:'../php/view_Team.php',
										})
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
									}

									$scope.sortItem = function(xyz) {
										if (xyz == $scope.sortby) {
											$scope.reverseSort = !$scope.reverseSort;
										}
										$scope.sortby = xyz;
									}
								})


								.controller('chngPswrd', function($scope,$http,$interval) {
									$http.get('../php/view_Team.php')
										.success(function(data) {
										//console.log(data);
										$scope.users = data;
									})

									$scope.changePass = function(team,pass) {
										$scope.team_name = team;
										$scope.pass = pass;
										$http({
											method:'post',
											url: '../php/changeTeam.php',
											data: {'team_name':$scope.team_name,'pass':$scope.pass}
										})
										.success(function(data){
											alert(data);
										})
									}
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

									.controller('updateComp', function($scope,$http,$interval){
										$scope.Update = false;
										$scope.reverseSort = false;
										$scope.sortby = 'comp_name';
										var auto = $interval(function() {
											$http({
												method:'get',
												url:'../php/view_Comp.php',
											})
												.success(function(data) {
													//console.log(data);
												$scope.comps = data;
											})
										},500)
										$scope.UpdateComp = function(name,cost) {
											$scope.comp_name = name;
											$scope.cost = cost;
											$scope.Update = true;
										}

										$scope.updateData = function() {
											$http({
												method:'post',
												url:'../php/update_comp.php',
												data: {'comp_name':$scope.comp_name,'cost':$scope.cost}
											})
											.success(function(data) {
												alert(data);
											})
											$scope.Update = false;
										}

										$scope.sortItem = function(xyz) {
											if (xyz == $scope.sortby) {
												$scope.reverseSort = !$scope.reverseSort;
											}
											$scope.sortby = xyz;
										}
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
