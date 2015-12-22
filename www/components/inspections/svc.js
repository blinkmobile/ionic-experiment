var app = require('../app');

app.service('InspectionsSvc', /* @ngInject */ function InspectionsSvc ($http) {
  var URL = 'https://blinkm.co/_api/interaction/run/trial/getjobs/?action=list&key=798d6ae09c69cd3955338eb8511a12550853149c&userid=1';

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

    findInspection: function (query) {
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

    retrieveInspections: function () {
      var me = this;

      return $http.get(URL)
        .success(function (data) {
          me.inspections = data.joblist;
        });
    }
  };
});
