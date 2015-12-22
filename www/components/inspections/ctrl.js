module.exports = /* @ngInject */ function InspectionsCtrl ($scope, InspectionsSvc) {
  var me = this;
  this.inspections = InspectionsSvc.inspections;
  this.search = '';

  InspectionsSvc.retrieveInspections()
    .then(function () {
      me.inspections = InspectionsSvc.inspections;
    });
};
