angular.module('app')
  .controller('InspectionsCtrl', InspectionsCtrl);

function InspectionsCtrl ($scope, InspectionsSvc) {
  var me = this;
  this.inspections = InspectionsSvc.inspections;

  InspectionsSvc.retrieveInspections()
    .then(function () {
      me.inspections = InspectionsSvc.inspections;
      // $scope.digest();
    });

  console.log(this.inspections);
}
