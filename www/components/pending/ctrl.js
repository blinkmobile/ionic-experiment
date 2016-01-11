require('../inspections/svc');
require('../pending-item/cmp');

module.exports = class Pending {
  /* @ngInject */
  constructor ($scope, InspectionsSvc) {
    this.styles = require('./ctrl.css');
    this.drafts = [];

    InspectionsSvc.drafts.iterate((draft) => {
      this.drafts.push(draft);
    }, () => {
      $scope.$digest();
    });
  }
}

module.exports.tpl = require('./tpl.html');
