angular.module('app')
  .filter('inspection_status', function () {
    return function (input, status) {
      return input.filter(function (inspection) {
        return inspection.status === status;
      });
    };
  })

  .filter('inspection_search', function () {
    return function (input, terms) {
      if (!terms || !terms.trim()) {
        return input;
      }
      return input.filter(function (inspection) {
        var match = false;
        Object.keys(inspection).forEach(function (key) {
          var value = ('' + inspection[key]).toLowerCase();
          if (value.indexOf(terms.toLowerCase()) !== -1) {
            match = true;
          }
        });
        return match;
      });
    };
  });
