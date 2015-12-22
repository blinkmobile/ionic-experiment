angular.module('app')
  .component('inspectionItem', {
    bindings: {
      inspection: '='
    },
    controller: function () {
      console.log('inspectionItem', this);
    },
    templateUrl: 'components/inspection-item/tpl.html'
  });
