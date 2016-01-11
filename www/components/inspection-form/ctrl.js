var angular = require('angular');
var uuid = require('uuid');

require('../inspections/svc');
require('../fail-input/cmp');
require('../geolocation/cmp');

module.exports = class InspectionFormCtrl {
  /* @ngInject */
  constructor ($ionicLoading, $state, $stateParams, InspectionsSvc) {
    this.$ionicLoading = $ionicLoading;
    this.$state = $state;
    this.InspectionsSvc = InspectionsSvc;

    this.date = new Date();
    this.styles = require('./ctrl.css');
    this.inspection = InspectionsSvc.findInspection({
      business: $stateParams.business
    });

    this.form = {
      _uuid: $stateParams.uuid || uuid.v1(),
      foodPreparationArea: null,
      foodServiceArea: null,
      foodStorage: null,
      rating: 0
    };

    if (!$stateParams.uuid) {
      $state.go('inspectionForm', { uuid: this.form._uuid }, {
        location: 'replace',
        notify: false
      });
    }
  }

  discard () {
    console.log('InspectionFormCtrl#discard()', this);
  }

  save () {
    console.log('InspectionFormCtrl#save()', this);
    var data = angular.extend({
      date: this.date.toISOString(),
      business: this.inspection.business
    }, this.form);
    this.InspectionsSvc.drafts.setItem(this.form._uuid, data);
  }

  submit () {
    console.log('InspectionFormCtrl#submit()', this);
    this.$ionicLoading.show({ template: 'Sending...' });
    this.InspectionsSvc.submitInspection(this.form)
      .catch(() => Promise.resolve()) // swallow any errors // TODO: handle them
      .then(() => {
        this.$ionicLoading.hide();
        this.$state.go('home');
      });
  }
}

module.exports.tpl = require('./tpl.html');
