// controller teste, com parametro usando nome que eu quiser
$app.controller("testeController",['$scope',function($joao){
  $joao.firstName;
}]);

$app.controller("listController",function($scope) {

});

$app.controller("editController",function($scope, $location, $routeProvider){
  $scope.title = "Edit Fruit";
  $scope.fruit = $routeParams.name;

  $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);
  $scope.save = function(){
      $scope.fruits[$scope.fruitIndex] = $scope.fruit;
      $location.path('/');
  };
});

$app.controller("newController",function($scope,$location){
  $scope.title = "New controller";
  $scope.fruit = "";

$scope.save = function(){
      $scope.fruits.push(angular.copy($scope.fruit));
      $location.path('/');
  };
});


$app.controller("appController",function($scope, $http){
  $scope.fruits = [];

  $scope.getData  = function(){
    $http.get("request/listFruits.html")
      .success(function(data){
        $scope.fruits = data.fruits;
        console.log($scope.fruits);
      })
      .error(function(data){
        alert("Error...");
        console.log(data);
    });
  }
});
