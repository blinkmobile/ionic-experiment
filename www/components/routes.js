var app = require('./app');

// if services/directives are not loaded here, then it's too late
require('./fail-input/cmp');
require('./geolocation/cmp');
require('./inspection-item/cmp');
require('./inspections/svc');
require('./inspections-list/cmp');
require('./pending-item/cmp');

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
    url: '/inspections/:business',
    template: require('./inspection-detail/ctrl').tpl
  });

  $stateProvider.state('inspectionForm', {
    controller: require('./inspection-form/ctrl'),
    controllerAs: 'ctrl',
    url: '/inspections/:business/inspect?uuid',
    template: require('./inspection-form/ctrl').tpl
  });

  $stateProvider.state('inspections-map', {
    controller: require('./inspections-map/ctrl'),
    controllerAs: 'ctrl',
    url: '/inspections/map',
    template: require('./inspections-map/ctrl').tpl
  });

  $stateProvider.state('pending', {
    controller: require('./pending/ctrl'),
    controllerAs: 'ctrl',
    url: '/pending',
    template: require('./pending/ctrl').tpl
  });
});
