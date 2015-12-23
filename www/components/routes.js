var app = require('./app');

// if services/directives are not loaded here, then it's too late
require('./fail-input/cmp');
require('./inspection-item/cmp');
require('./inspections/svc');
require('./inspections-list/cmp');

app.config(/* ngInject */ function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    controller: require('./home/ctrl'),
    controllerAs: 'ctrl',
    url: '/',
    template: require('./home/ctrl').tpl
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

  $stateProvider.state('inspectionDetail', {
    controller: require('./inspection-detail/ctrl'),
    controllerAs: 'ctrl',
    url: '/inspections/:inspection',
    template: require('./inspection-detail/ctrl').tpl
  });

  $stateProvider.state('inspectionForm', {
    controller: require('./inspection-form/ctrl'),
    controllerAs: 'ctrl',
    url: '/inspections/:inspection/inspect',
    template: require('./inspection-form/ctrl').tpl
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
