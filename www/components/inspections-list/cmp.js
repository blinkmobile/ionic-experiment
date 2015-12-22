angular.module('app')
  .component('inspectionsList', {
    bindings: {
      inspections: '=',
      search: '=',
      status: '='
    },
    templateUrl: 'components/inspections-list/tpl.html'
  });
