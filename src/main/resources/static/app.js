(function () {
    var springBootAws = angular.module('SpringBootAwsDemo', ['ngRoute', 'angularUtils.directives.dirPagination']);

    springBootAws.directive('active', function ($location) {
        return {
            link: function (scope, element) {
                function makeActiveIfMatchesCurrentPath() {
                    if ($location.path().indexOf(element.find('a').attr('href').substr(1)) > -1) {
                        element.addClass('active');
                    } else {
                        element.removeClass('active');
                    }
                }

                scope.$on('$routeChangeSuccess', function () {
                    makeActiveIfMatchesCurrentPath();
                });
            }
        };
    });
    
    springBootAws.directive('fileModel', [ '$parse', function($parse) {
    	return {
    		restrict : 'A',
    		link : function(scope, element, attrs) {
    			var model = $parse(attrs.fileModel);
    			var modelSetter = model.assign;

    			element.bind('change', function() {
    				scope.$apply(function() {
    					modelSetter(scope, element[0].files[0]);
    				});
    			});
    		}
    	};
    } ]);
    
    springBootAws.controller('CreateUserCtrl', function ($scope, $location, $http) {
        var self = this;
        
        self.add = function () {            
        	var userModel = self.model;        	
        	var savedUser;
        	
        	var formData = new FormData();
        	formData.append('firstName', userModel.firstName);
        	formData.append('lastName', userModel.lastName);
        	formData.append('description', userModel.description);
        	formData.append('image', userModel.image);
        	formData.append('start', userModel.updation.start.getFullYear()  + '-' +  (userModel.updation.start.getMonth() + 1)  + '-' + userModel.updation.start.getDay() + '-' + userModel.updation.start.getTime());
        	formData.append('update', userModel.updation.update.getFullYear()  + '-' +  (userModel.updation.update.getMonth() + 1)  + '-' + userModel.updation.update.getDay()  + '-' + userModel.updation.update.getTime());
        
        		
        	$scope.saving=true;
        	$http.post('/spring-boot-aws/users', formData, {	
        	    transformRequest : angular.identity,
    			headers : {
    				'Content-Type' : undefined
    			}
    		}).success(function(savedUser) {
    			$scope.saving=false;
    			$location.path("/view-user/" + savedUser.id);    			
    		}).error(function(data) {
    			$scope.saving=false; 
    		});
        };
    });
    
    springBootAws.controller('ViewUserCtrl', function ($scope, $http, $routeParams) {
        
    	var userId = $routeParams.userId;    	        
    	$scope.currentPage = 1;
    	$scope.pageSize = 10;
    	
    	$scope.dataLoading = true;
        $http.get('/spring-boot-aws/users/' + userId).then(function onSuccess(response) {
        	$scope.user = response.data;
        	$scope.dataLoading = false;
        }, function onError(response) {
        	$scope.user = response.statusText;
        	$scope.dataLoading = false;
        });
    });
    
    springBootAws.controller('ViewAllUsersCtrl', function ($scope, $http) {
    	
    	var self = this;
    	$scope.users = []; 
    	$scope.searchText;
        
        $scope.dataLoading = true;
        $http.get('/spring-boot-aws/users').then(function mySucces(response) {
        	$scope.users = response.data;
        	$scope.dataLoading = false;
        }, function myError(response) {
        	$scope.user = response.statusText;
        	$scope.dataLoading = false;
        });        
        
        self.delete = function (userId) {
        	$scope.selectedUser = userId;
        	$scope.userDelete = true;
        	$http.delete('/spring-boot-aws/users/' + userId).then(function onSucces(response) {
            	$scope.users = _.without($scope.users, _.findWhere($scope.users, {id: userId}));
            	$scope.userDelete = false;
            }, function onError(){
            	
            });
        },
        
        $scope.searchFilter = function (obj) {
            var re = new RegExp($scope.searchText, 'i');
            return !$scope.searchText || re.test(obj.firstName) || re.test(obj.lastName.toString());
        };
    });
    
    springBootAws.filter('formatDate', function() {
    	return function(input) {
    		return moment(input).format("DD-MM-YYYY:mm:ss.sssZ");
    	};
    });
    
    springBootAws.config(function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'pages/home.tpl.html'});
        $routeProvider.when('/create-user', {templateUrl: 'pages/createUser.tpl.html'});
        $routeProvider.when('/view-user/:userId', {templateUrl: 'pages/viewUser.tpl.html'});
        $routeProvider.when('/view-all-users', {templateUrl: 'pages/viewAllUsers.tpl.html'});
        $routeProvider.otherwise({redirectTo: '/home'});
    });
    
}());