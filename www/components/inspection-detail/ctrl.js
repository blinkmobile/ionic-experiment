require('../inspections/svc');

module.exports = /* @ngInject */ function InspectionDetailCtrl ($stateParams, InspectionsSvc) {
  this.styles = require('./ctrl.css');
  this.inspection = InspectionsSvc.findInspection({ business: $stateParams.inspection });
  console.log('InspectionCtrl', this);
}

module.exports.tpl = require('./tpl.html');
