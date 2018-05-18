var app = angular.module('myApp',[])
								 .controller('GetUsers',function($scope,$http){
										$http.get('../php/view_Team.php')
         							.success(function(data) {
				              // here the data from the api is assigned to a variable named users
				              $scope.users = data;
											console.log($scope.users)
					 					});
									}
								);
