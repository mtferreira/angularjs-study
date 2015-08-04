// criando um module para a palicação e pasando o module nativo ngRoute como depemdência
$app = angular.module("app", ["ngRoute","ngResource"]);

// configurando as rotas
$app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'listController',
      templateUrl: 'list.html'
    })
    .when('/edit/:name', {
      controller: 'editController',
      templateUrl: 'form.html'
    })
    .when('/new', {
      controller: 'newController',
      templateUrl: 'form.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// setando o valor de fruits para todos os templates reendenizados
$app.run(function($rootScope) {
  $rootScope.fuits = ['banana', 'apple', 'orange'];
});
