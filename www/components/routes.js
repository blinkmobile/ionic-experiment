angular.module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'components/home/tpl.html'
    });

    $stateProvider.state('inspections', {
      controller: 'InspectionsCtrl',
      controllerAs: 'ctrl',
      url: '/inspections',
      templateUrl: 'components/inspections/tpl.html'
    });

    $stateProvider.state('inspections-closest', {
      controller: 'InspectionClosestCtrl',
      url: '/inspections/closest',
      templateUrl: 'components/inspection-closest/tpl.html'
    });

    $stateProvider.state('inspections-detail', {
      controller: 'InspectionCtrl',
      url: '/inspections/:inspection',
      templateUrl: 'components/inspection/tpl.html'
    });

    $stateProvider.state('inspections-map', {
      controller: 'InspectionsMapCtrl',
      url: '/inspections/map',
      templateUrl: 'components/inspections-map/tpl.html'
    });

    $stateProvider.state('pending', {
      url: '/pending',
      templateUrl: 'components/pending/tpl.html'
    });
  });
