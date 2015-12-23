require('../inspections/svc');
require('../fail-input/cmp');
require('../geolocation/cmp');

module.exports = class InspectionFormCtrl {
  /* @ngInject */
  constructor ($stateParams, InspectionsSvc) {
    this.date = new Date();
    this.styles = require('./ctrl.css');
    this.inspection = InspectionsSvc.findInspection({ business: $stateParams.inspection });
    this.form = {
      foodPreparationArea: null,
      foodServiceArea: null,
      foodStorage: null,
      rating: 0
    };
  }

  discard () {
    console.log('InspectionFormCtrl#discard()', this);
  }

  save () {
    console.log('InspectionFormCtrl#save()', this);
  }

  submit () {
    console.log('InspectionFormCtrl#submit()', this);
  }
}

module.exports.tpl = require('./tpl.html');
