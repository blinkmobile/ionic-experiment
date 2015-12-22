var app = require('./app');

// if services/directives are not loaded here, then it's too late
require('./inspection-item/cmp');
require('./inspections/svc');
require('./inspections-list/cmp');

app.config(/* ngInject */ function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    template: require('./home/tpl.html')
  });

  $stateProvider.state('inspections', {
    controller: require('./inspections/ctrl'),
    controllerAs: 'ctrl',
    url: '^/inspections',
    template: require('./inspections/ctrl').tpl
  });

  $stateProvider.state('inspections-closest', {
    controller: require('./inspection-closest/ctrl'),
    url: '/inspections/closest',
    template: require('./inspection-closest/ctrl').tpl
  });

  $stateProvider.state('inspection', {
    abstract: true,
    url: '/inspection',
    template: '<ui-view />'
  });

  $stateProvider.state('inspection.detail', {
    controller: require('./inspection/ctrl'),
    controllerAs: 'ctrl',
    url: '/:inspection',
    template: require('./inspection/ctrl').tpl
  });

  $stateProvider.state('inspections-map', {
    controller: require('./inspections-map/ctrl'),
    controllerAs: 'ctrl',
    url: '/inspections/map',
    template: require('./inspections-map/ctrl').tpl
  });

  $stateProvider.state('pending', {
    url: '/pending',
    template: require('./pending/tpl.html')
  });
});
