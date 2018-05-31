var app = angular.module('myApp',[])

								 .controller('Details',function($rootScope,$scope,$http){
									 $http.get('../php/view_Team.php').then(function(response) {
									 	console.log(response.data);
										$rootScope.DetailsU = response.data;
									 })
									 $http.get('../php/view_Comp.php').then(function(response) {
									 	console.log(response.data);
										$rootScope.DetailsC = response.data;
									 })
								 })

								 .controller('GetUsers',function($scope,$interval,$rootScope){
									 $interval(GetUsers1, 800);
									 function GetUsers1() {
									 	$scope.users = $rootScope.DetailsU
									 }
								})

								.controller('addUser',function($scope,$http,$rootScope) {
									 $scope.addTeamNew = function() {
										 console.log('1234')
									 		$http({
												method:'post',
												url:'../php/add_Team.php',
												data: {'user_id':$scope.user_id,'user_password':$scope.user_password,'team_leader':$scope.team_leader,'memberNum':$scope.memberNum,'phoneNum':$scope.phoneNum}
											})
											.success(function(data) {
												console.log(data);
												alert(data)
												$http.get('../php/view_Team.php')
												.then(function(response) {
		 									 	console.log(response.data);
		 										$rootScope.DetailsU = response.data;
												$scope.user_id="";
												$scope.user_password="";
												$scope.team_leader="";
												$scope.memberNum="";
												$scope.phoneNum="";
		 									 })
											})
									 }
								})

								.controller('removeUser', function($scope,$http,$rootScope,$interval){
									$interval(GetUsers1, 800);
									function GetUsers1() {
									 $scope.users = $rootScope.DetailsU
									}
									$scope.deleteTeam = function(user_id){
										console.log(user_id);
										$http({
											method:'post',
											url:'../php/remove_Team.php',
											data:{'user_id':user_id}
										})
										.success(function(data) {
											alert(data);
											$http.get('../php/view_Team.php')
											.then(function(response) {
												console.log(response.data);
												$rootScope.DetailsU = response.data;
										 })
										})
									}
								})

								.controller('updateUser', function($scope,$http,$interval,$rootScope){
									$scope.Update = false;
									$scope.reverseSort = false;
									$scope.sortby = 'user_id';

									$interval(GetUsers1, 800);
									function GetUsers1() {
									 $scope.users = $rootScope.DetailsU
									}

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
											$http.get('../php/view_Team.php')
											.then(function(response) {
												console.log(response.data);
												$rootScope.DetailsU = response.data;
										 })

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


								.controller('chngPswrd', function($scope,$http,$interval,$rootScope) {
									$interval(GetUsers1, 800);
									function GetUsers1() {
									 $scope.users = $rootScope.DetailsU
									}

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
											$http.get('../php/view_Team.php')
											.then(function(response) {
												console.log(response.data);
												$rootScope.DetailsU = response.data;
										 })
										})
									}
								})


								.controller('addComponents', function($scope,$http,$rootScope) {
										$scope.addCompNew = function() {
											 $http({
												 method:'post',
												 url:'../php/add_Comp.php',
												 data: {'compName':$scope.compName,'compCost':$scope.compCost}
											 })
											 .success(function(data) {
												 alert(data);
												 $http.get('../php/view_Comp.php')
 												.then(function(response) {
 													console.log(response.data);
 													$rootScope.DetailsC = response.data;
												})
											 })
										}
									})


									.controller('viewComp', function($scope,$interval,$rootScope) {
										$interval(GetUsers1, 800);
 									 function GetUsers1() {
 									 	$scope.comps = $rootScope.DetailsC
 									 }
									})

									.controller('updateComp', function($scope,$http,$interval,$rootScope){
										$scope.Update = false;
										$scope.reverseSort = false;
										$scope.sortby = 'comp_name';

										$interval(GetUsers1, 800);
 									 function GetUsers1() {
 									 	$scope.comps = $rootScope.DetailsC
 									 }
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
												$http.get('../php/view_Comp.php')
												.then(function(response) {
													console.log(response.data);
													$rootScope.DetailsC = response.data;
											 })
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


									.controller('removeComp', function($scope,$http,$rootScope,$interval){
										$interval(GetUsers1, 800);
										function GetUsers1() {
											$scope.comps = $rootScope.DetailsC
										}

										$scope.deleteComp = function(comp_name){
											$http({
												method:'post',
												url:'../php/remove_Comp.php',
												data:{'comp_name':comp_name}
											})
											.success(function(data) {
												alert(data);
												$http.get('../php/view_Comp.php')
												.then(function(response) {
													console.log(response.data);
													$rootScope.DetailsC = response.data;
												})
											})
										}
									});
