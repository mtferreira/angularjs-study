// controller teste, com parametro usando nome que eu quiser
$app.controller("testeController", ['$scope', function($joao) {
  $joao.firstName;
}]);

$app.controller("listController", function($scope) {

});

$app.controller("editController", function($scope, $location, $routeProvider) {
  $scope.title = "Edit Fruit";
  $scope.fruit = $routeParams.name;

  $scope.fruitIndex = $scope.fruits.indexOf($scope.fruit);
  $scope.save = function() {
    $scope.fruits[$scope.fruitIndex] = $scope.fruit;
    $location.path('/');
  };
});

$app.controller("newController", function($scope, $location) {
  $scope.title = "New controller";
  $scope.fruit = "";

  $scope.save = function() {
    $scope.fruits.push(angular.copy($scope.fruit));
    $location.path('/');
  };
});

$app.controller("appController", function($scope, $http) {
  $scope.fruits = [];

  $scope.getData = function() {
    $http.get("request/listFruits.html")
      .success(function(data) {
        $scope.fruits = data.fruits;
        console.log($scope.fruits);
      })
      .error(function(data) {
        alert("Error...");
        console.log(data);
      });
  }
});

$app.controller("phoneController", function($scope, $resource) {
  Phone = $resource("/phones/:phoneId");

  $scope.getPhoneById = function() {
    Phone.get({
      phoneId: $scope.idPhone
    }, function(data) {
      $scope.phone = data;
    });
  }

  $scope.getPhones = function() {
    Phone.query(function(data) {
      $scope.phones = data;
    });
  }

  $scope.savePhone = function() {
    p = new Phone();
    p.number = "1111-2222";
    p.$save();
  }

  $scope.deletePhone = function() {
    Phone.delete({
      phoneId: 10
    });
  }

});
