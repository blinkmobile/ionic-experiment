angular.module('app')
  .component('inspectionItem', {
    bindings: {
      inspection: '='
    },
    templateUrl: 'components/inspection-item/tpl.html'
  });
