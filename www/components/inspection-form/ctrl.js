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
