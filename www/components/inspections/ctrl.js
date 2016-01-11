require('../inspections/svc');
require('../inspections-list/cmp');

module.exports = /* @ngInject */ function InspectionsCtrl ($ionicLoading, $scope, InspectionsSvc) {
  this.inspections = InspectionsSvc.inspections;
  this.search = '';

  $ionicLoading.show({ template: 'Retrieving...' });
  InspectionsSvc.retrieveInspections()
    .catch(() => Promise.resolve()) // swallow any errors // TODO: handle them
    .then(() => {
      this.inspections = InspectionsSvc.inspections;
      $ionicLoading.hide();
    });
};

module.exports.tpl = require('./tpl.html');
