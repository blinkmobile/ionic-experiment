module.exports = /* @ngInject */ function InspectionCtrl ($stateParams, InspectionsSvc) {
  this.inspection = InspectionsSvc.findInspection({ business: $stateParams.inspection });
  console.log('InspectionCtrl', this);
}
