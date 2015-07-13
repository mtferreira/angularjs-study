var myApp = angular.module("myApp", []);

myApp.controller("estados", function ($scope) {
    $scope.name = "controller-estados";
});

myApp.controller("names", function ($scope) {
    $scope.name = "controller-names";
});

myApp.controller("master-controller", function ($scope) {
    $scope.name = "controller-master";
});
myApp.controller("sub-estado", function ($scope) {
    $scope.name = "sub-estado-controller"
})