var angular = require('angular');
var param = require('jquery-param');
var uuid = require('uuid');

var app = require('../app');

app.service('InspectionsSvc', /* @ngInject */ function InspectionsSvc ($http) {
  var URL = 'https://blinkm.co/_api/interaction/run/trial/getjobs/?action=list&key=798d6ae09c69cd3955338eb8511a12550853149c&userid=1';

  var POST = 'http://blinkm.co/_R_/common/3/xhr/SaveFormRecord.php?schema=3&_asid=20442&_fn=report&_action=add';

  return {
    // inspections: [],

    inspections: [{
        "address": "125 Donnison St",
        "business": "Jimmy's Cafe",
        "colour": "CC0000",
        "date": "21 Nov 2014",
        "form": "sitehistory",
        "latlong": "-33.427164,151.342995",
        "postcode": "2250",
        "previousresult": "Passed",
        "state": "NSW",
        "status": "Overdue",
        "suburb": "Gosford",
        "totals": "2"
    }],

    findInspection (query) {
      var matches = this.inspections.filter(function (inspection) {
        var key, value;
        for (key in query) {
          if (query.hasOwnProperty(key)) {
            value = query[key];
            if (inspection[key] !== value) {
              return false;
            }
          }
        }
        return true;
      });
      return matches[0];
    },

    retrieveInspections () {
      var me = this;

      return $http.get(URL)
        .success(function (data) {
          me.inspections = data.joblist;
        });
    },

    submitInspection (record) {
      var data = angular.extend({
        _uuid: uuid.v1(),
        _submittedTime: (new Date).valueOf()
      }, record);
      return $http({
        method: 'POST',
        url: POST,
        data: param(data),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });
      return $http.post(POST, data);
    }
  };
});
