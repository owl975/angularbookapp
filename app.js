angular.module('bookApp', [])
	.controller('BooksCtrl', ['$scope', '$http', function($scope, $http){
		$scope.books = [];
		$scope.book = {};

		$http.get('http://daretodiscover.herokuapp.com/books/').
  			then(function(response) {
   			$scope.books = response.data;

  			});

  		$scope.createBook = function() {
  			$http.post('http://daretodiscover.herokuapp.com/books/', $scope.book).
  				then(function(response) {
   				var newBook = response.data;
   				$scope.book = {};
   				$scope.books.push(newBook);

  			});
  		};
	}]);