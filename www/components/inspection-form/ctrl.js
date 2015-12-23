require('../inspections/svc');
require('../fail-input/cmp');

module.exports = /* @ngInject */ function InspectionFormCtrl ($stateParams, InspectionsSvc) {
  this.date = new Date();
  this.styles = require('./ctrl.css');
  this.inspection = InspectionsSvc.findInspection({ business: $stateParams.inspection });
  this.form = {
    foodPreparationArea: null,
    foodServiceArea: null,
    foodStorage: null,
  };
  this.failReasons = [
    'Unsanitary',
    'Incorrect',
    'Pest infestation',
    'Dangerous',
    'Other'
  ];
}

module.exports.tpl = require('./tpl.html');
