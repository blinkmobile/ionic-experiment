require('../inspections/svc');
require('../inspections-list/cmp');

module.exports = /* @ngInject */ function InspectionsCtrl ($scope, InspectionsSvc) {
  var me = this;
  this.inspections = InspectionsSvc.inspections;
  this.search = '';

  InspectionsSvc.retrieveInspections()
    .then(function () {
      me.inspections = InspectionsSvc.inspections;
    });
};

module.exports.tpl = require('./tpl.html');
