angular.module('app')
  .controller('InspectionCtrl', InspectionCtrl);

function InspectionCtrl ($stateParams, InspectionsSvc) {
  this.inspection = InspectionsSvc.findInspection({ business: $stateParams.inspection });
  console.log('InspectionCtrl', this);
}
