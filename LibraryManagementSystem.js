
var app = angular.module("myApp", ["ngRoute"]);
app.config(['$routeProvider',function($routeProvider) {
			$routeProvider
				.when("/", {
					templateUrl : "/LibraryManagementSystem.html",
					controller : "indexController"
				})
				.when("/AddNewBook", {
					templateUrl : "/AddNewBook.html",
					controller : "addBook"
				})
				.when("/AddNewAuthor", {
					templateUrl : "/AddNewAuthor.html",
					controller : "addAuthor"
				})
				.when("/editAuthor", {
					templateUrl : "/AuthorDetails.html",
					controller : "authorEditController"
				})
				.when("/editBook", {
					templateUrl : "/BookDetails.html",
					controller : "bookEditController"
				});
	
			}]);

app.controller('indexController', function($scope, $http) {
				$http.get("http://172.27.12.104:3000/book/list")
				.then(function(response) {
				$scope.myWelcome = response.data;
			});
		});
	

/*Author details */
app.controller("authorEditController",function($scope,$http,$location){
			var myUrl = $location.search().author;
			var request = $http({
                    method: "post",
                    url: "http://172.27.12.104:3000/author/byname",
                    data: {"name" : myUrl}
            });
			request.success(function(data){
				$scope.authorDetails = data;
			})
			request.error(function(data) {
			});
		});

/*Book details */
app.controller("bookEditController",function($scope,$http,$location){
			var myUrl = $location.search().book;
			var request = $http({
                    method: "post",
                    url: "http://172.27.12.104:3000/book/byisbn" ,
                    data: {"isbn" : myUrl}
            });
			request.success(function(data){
				$scope.bookDetails = data;
			})
			request.error(function(data) {

			});
		});